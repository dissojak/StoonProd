"use client";

import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SuccessMessage } from "./components/SuccessMessage";
import { ErrorMessage } from "./components/ErrorMessage";
import { ContactSidebar } from "./components/ContactSidebar";
import { getContactFormValues, validateContactForm, hasContactFormErrors, ContactFormErrors, ContactFormValues } from "./utils/contactFormUtils";


type FormErrors = ContactFormErrors;

function Contact() {
  const { showSuccess, showError, handleGoHome, handleSendAnother, handleSendEmail, formProps } = useContactForm();

  return (
    <>
      <div className="bg-teal-500 w-full h-24 block" />
      <section className="bg-white text-black py-20 dark:bg-gray-950 dark:text-white md:h-[79vh] lg:h-[82.9vh]">
        <div className="max-w-screen-lg p-5 md:m-auto sm:mx-20">
          <div className="grid grid-cols-1 md:grid-cols-12 border border-gray-600 dark:border-teal-400">
            <ContactSidebar />
            <div className="md:col-span-8 p-10">
              {showSuccess ? (
                <SuccessMessage
                  onHome={handleGoHome}
                  onSendAnother={handleSendAnother}
                  onSendEmail={handleSendEmail}
                />
              ) : showError ? (
                <ErrorMessage onHome={handleGoHome} onSendAnother={handleSendAnother} />
              ) : (
                <ContactForm {...formProps} />
              )}
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t dark:bg-gray-900">
        <div className="container flex items-center justify-between px-6 py-8 mx-auto">
          <p className="text-gray-500 dark:text-teal-600">
            © 2020-2025 All Rights Reserved By Stoon Production.
          </p>
          <p className="font-medium text-gray-700 dark:text-teal-600">Terms of Service</p>
        </div>
      </footer>
    </>
  );
}

function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState("Open");

  useEffect(() => {
    const sbj = searchParams.get("sbj");
    if (sbj) setSubject(sbj);
  }, [searchParams]);

  function handleFormErrors(values: ContactFormValues) {
    const newErrors = validateContactForm(values);
    setErrors(newErrors);
    return hasContactFormErrors(newErrors);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
      formRef,
      handleSubmit,
      errors,
      inputClass,
    },
  };
}

type ContactFormProps = {
  formRef: React.RefObject<HTMLFormElement | null>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: FormErrors;
  inputClass: (error?: string) => string;
};

function ContactForm({ formRef, handleSubmit, errors, inputClass }: ContactFormProps) {
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            htmlFor="grid-full-name"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="grid-full-name"
            name="grid-full-name"
            className={inputClass(errors.fullName)}
          />
          {errors.fullName && (
            <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="grid-phone-number"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-300"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="grid-phone-number"
            name="grid-phone-number"
            className={inputClass(errors.phone)}
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            htmlFor="grid-email"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-300"
          >
            Email Address
          </label>
          <input
            type="email"
            id="grid-email"
            name="grid-email"
            className={inputClass(errors.email)}
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            htmlFor="grid-message"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-300"
          >
            Your Message
          </label>
          <textarea
            id="grid-message"
            name="grid-message"
            className={inputClass(errors.message)}
            rows={5}
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-xs mt-1">{errors.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-4 mt-4">
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded dark:bg-teal-500 dark:hover:bg-teal-600"
        >
          Send Message
        </button>
        <button
          type="button"
          className="bg-gray-200 hover:bg-gray-300 text-teal-700 font-bold py-2 px-4 rounded flex items-center gap-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-teal-400"
          onClick={() => window.open("mailto:stoonproduction@gmail.com", "_blank")}
        >
          <svg
            className="h-5 w-5 text-teal-600 dark:text-teal-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.94 6.94A2 2 0 014 6h12a2 2 0 011.06.94l-7.06 4.41-7.06-4.41zM18 8.08V14a2 2 0 01-2 2H4a2 2 0 01-2-2V8.08l7.47 4.67a1 1 0 001.06 0L18 8.08z" />
          </svg>
          Email Us Directly
        </button>
      </div>
    </form>
  );
}

export default Contact;
