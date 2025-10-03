import { isValidEmail } from "./emailValidation";

export interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  general?: string;
}

export function getInitialValues(): FormValues {
  return { name: "", email: "", subject: "", message: "" };
}

export function getInitialErrors(): FormErrors {
  return {};
}

export function getFormValues(form: HTMLFormElement): FormValues {
  const formData = new FormData(form);
  return {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    subject: String(formData.get("subject") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  };
}

export function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name) errors.name = "Name is required";
  if (!values.email) errors.email = "Email is required";
  else if (!isValidEmail(values.email)) errors.email = "Invalid email format";
  if (!values.subject) errors.subject = "Subject is required";
  if (!values.message) errors.message = "Message is required";
  else if (values.message.length < 10) errors.message = "Message must be at least 10 characters";
  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}
