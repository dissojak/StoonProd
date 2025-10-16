import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  getContactFormValues,
  validateContactForm,
  hasContactFormErrors,
  ContactFormErrors,
  ContactFormValues,
} from "../utils/contactFormUtils";

export interface UseContactFormReturn {
  showSuccess: boolean;
  showError: boolean;
  handleGoHome: () => void;
  handleSendAnother: () => void;
  handleSendEmail: () => void;
  formProps: {
    formRef: React.RefObject<HTMLFormElement>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    errors: ContactFormErrors;
    inputClass: (error?: string) => string;
  };
}

export function useContactForm(): UseContactFormReturn {
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState("Open"); // Reserved if subject usage is added later

  useEffect(() => {
    const sbj = searchParams.get("sbj");
    if (sbj) setSubject(sbj);
  }, [searchParams]);

  function handleFormErrors(values: ContactFormValues) {
    const newErrors = validateContactForm(values);
    setErrors(newErrors);
    return hasContactFormErrors(newErrors);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    void (async () => {
      const form = formRef.current;
      if (!form) return;
      const values = getContactFormValues(form);

      if (handleFormErrors(values)) return;

      try {
        const res = await fetch("/api/contact-send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) {
          setShowError(true);
          return;
        }
        setShowSuccess(true);
        form.reset();
      } catch (err) {
        setShowError(true);
      }
    })();
  }

  const handleGoHome = () => (window.location.href = "/");
  const handleSendAnother = () => {
    setShowSuccess(false);
    setShowError(false);
  };
  const handleSendEmail = () => window.open("mailto:stoonproduction@gmail.com", "_blank");

  const inputClass = (error?: string) =>
    `appearance-none block w-full bg-gray-200 text-gray-700 border ${
      error ? "border-red-600" : "border-gray-200"
    } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:focus:border-gray-300 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-800`;

  return {
    showSuccess,
    showError,
    handleGoHome,
    handleSendAnother,
    handleSendEmail,
    formProps: {
      formRef: formRef as React.RefObject<HTMLFormElement>,
      handleSubmit,
      errors,
      inputClass,
    },
  };
}

export default useContactForm;
