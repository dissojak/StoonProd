import { isValidEmail } from "./emailValidation";

export interface ContactFormValues {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<"fullName" | "phone" | "email" | "message", string>>;

function getTrimmedValue(form: HTMLFormElement, name: string): string {
  const element = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
  return element?.value.trim() || "";
}

export function getContactFormValues(form: HTMLFormElement): ContactFormValues {
  const fullName = getTrimmedValue(form, "grid-full-name");
  const phone = getTrimmedValue(form, "grid-phone-number");
  const email = getTrimmedValue(form, "grid-email");
  const message = getTrimmedValue(form, "grid-message");
  return { fullName, phone, email, message };
}

function validateFullName(fullName: string): string | undefined {
  if (!fullName) return "Full name is required.";
  if (!fullName.includes(" ")) return "Enter both first and last name.";
  if (fullName.length < 5) return "Name seems too short.";
  return undefined;
}

function validatePhone(phone: string): string | undefined {
  if (!phone) return "Phone is required.";
  if (!/^\d{8}$/.test(phone)) return "Phone must be 8 digits (Tunisian number).";
  return undefined;
}

function validateEmail(email: string): string | undefined {
  if (!email) return "Email is required.";
  if (!isValidEmail(email)) return "Enter a valid email.";
  return undefined;
}

function validateMessage(message: string): string | undefined {
  if (!message) return "Message cannot be empty.";
  if (message.length < 10) return "Message must be at least 10 characters.";
  if (message.length > 2000) return "Message is too long.";
  return undefined;
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const { fullName, phone, email, message } = values;

  const fullNameError = validateFullName(fullName);
  if (fullNameError) errors.fullName = fullNameError;

  const phoneError = validatePhone(phone);
  if (phoneError) errors.phone = phoneError;

  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  const messageError = validateMessage(message);
  if (messageError) errors.message = messageError;

  return errors;
}

export function hasContactFormErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
