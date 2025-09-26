"use client";

import React, { useRef, useState } from "react";

// --- Constants for Large String Literals ---
const CONTACT_DESCRIPTION =
  "We would love to hear from you! Whether you have a question about our services, want to start a project, or just want to say hello, our team is ready to help. Fill out the form and we&apos;ll get back to you as soon as possible.";

const ADDRESS_TEXT = "FR82+8V8, Al-Maamoura, Nabeul, Tunisia";
const PHONE_TEXT = "+216 23 039 320";
const REPLY_TEXT = "We reply within 24 hours";

const SUCCESS_TITLE = "Email Sent Successfully!";
const SUCCESS_BODY = "Your message was sent. Our team will respond within 24 hours.";
const ERROR_TITLE = "Error Sending Message";
const ERROR_BODY =
  "There was a problem sending your message. Please try again later or contact us directly.";

// --- Email Validator ---
function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  const at = email.indexOf("@");
  if (!hasValidAtSymbol(email, at)) return false;

  const local = email.slice(0, at);
  const domain = email.slice(at + 1);

  if (!isValidLocal(local)) return false;
  if (!isValidDomain(domain)) return false;

  return true;
}

function hasValidAtSymbol(email: string, at: number): boolean {
  return at > 0 && at === email.lastIndexOf("@") && at !== email.length - 1;
}

function isValidLocal(local: string): boolean {
  return local.length > 0 && local.length <= 64;
}

function isValidDomain(domain: string): boolean {
  if (domain.length < 3 || domain.length > 255) return false;
  if (domain.includes("..")) return false;
  const labels = domain.split(".");
  if (labels.length < 2) return false;
  for (const label of labels) {
    if (!isValidDomainLabel(label)) return false;
  }
  return true;
}

function isValidDomainLabel(label: string): boolean {
  return label.length > 0 && label.length <= 63 && !label.startsWith("-") && !label.endsWith("-");
}

type FormErrors = Partial<Record<"fullName" | "phone" | "email" | "message", string>>;

// --- Success Message Component ---
function SuccessMessage({
  onHome,
  onSendAnother,
  onSendEmail,
}: {
  onHome: () => void;
  onSendAnother: () => void;
  onSendEmail: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="bg-green-100 rounded-full p-4 mb-4">
        <svg
          className="h-12 w-12 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-green-600 mb-2">{SUCCESS_TITLE}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">{SUCCESS_BODY}</p>
      <div className="flex flex-row gap-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-teal-700 font-bold py-2 px-4 rounded flex items-center gap-2"
          onClick={onHome}
        >
          Go Home
        </button>
        <button
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          onClick={onSendAnother}
        >
          Send Another Message
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-teal-700 font-bold py-2 px-4 rounded flex items-center gap-2"
          onClick={onSendEmail}
        >
          <svg className="h-5 w-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.94 6.94A2 2 0 014 6h12a2 2 0 011.06.94l-7.06 4.41-7.06-4.41zM18 8.08V14a2 2 0 01-2 2H4a2 2 0 01-2-2V8.08l7.47 4.67a1 1 0 001.06 0L18 8.08z" />
          </svg>
          Send Email
        </button>
      </div>
    </div>
  );
}

// --- Error Message Component ---
function ErrorMessage({
  onHome,
  onSendAnother,
}: {
  onHome: () => void;
  onSendAnother: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="bg-red-100 rounded-full p-4 mb-4">
        <svg
          className="h-12 w-12 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-red-600 mb-2">{ERROR_TITLE}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">{ERROR_BODY}</p>
      <div className="flex flex-row gap-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-teal-700 font-bold py-2 px-4 rounded flex items-center gap-2"
          onClick={onHome}
        >
          Go Home
        </button>
        <button
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          onClick={onSendAnother}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  type FormValues = {
    fullName: string;
    phone: string;
    email: string;
    message: string;
  };

  const validate = (values: FormValues): FormErrors => {
    const { fullName, phone, email, message } = values;
    const newErrors: FormErrors = {};
    if (!fullName) newErrors.fullName = "Full name is required.";
    else if (!fullName.includes(" ")) newErrors.fullName = "Enter both first and last name.";

    if (!phone) newErrors.phone = "Phone is required.";
    else if (!/^\d{8}$/.test(phone)) newErrors.phone = "Phone must be 8 digits (Tunisian number).";

    if (!email) newErrors.email = "Email is required.";
    else if (!isValidEmail(email)) newErrors.email = "Enter a valid email.";

    if (!message) newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  function getFormValues(form: HTMLFormElement) {
    const fullName =
      (form.elements.namedItem("grid-full-name") as HTMLInputElement)?.value.trim() || "";
    const phone =
      (form.elements.namedItem("grid-phone-number") as HTMLInputElement)?.value.trim() || "";
    const email = (form.elements.namedItem("grid-email") as HTMLInputElement)?.value.trim() || "";
    const message =
      (form.elements.namedItem("grid-message") as HTMLTextAreaElement)?.value.trim() || "";
    return { fullName, phone, email, message };
  }

  function handleFormErrors(values: {
    fullName: string;
    phone: string;
    email: string;
    message: string;
  }) {
    const newErrors = validate(values);
    setErrors(newErrors);
    return Object.keys(newErrors).length > 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const values = getFormValues(form);

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

  return (
    <>
      <div className="bg-teal-500 w-full h-24 block" />
<section className="bg-white text-black py-20 dark:bg-gray-950 dark:text-white md:h-[79vh] lg:h-[82.9vh]">
        <div className="max-w-screen-lg p-5 md:m-auto sm:mx-20">
          <div className="grid grid-cols-1 md:grid-cols-12 border border-gray-600 dark:border-teal-400">
            <div className="bg-gray-900 md:col-span-4 p-10 text-white dark:bg-gray-800 dark:text-gray-100">
              <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
              <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                Get In <span className="text-teal-500 dark:text-teal-400">Touch</span>
              </h3>
              <p className="mt-4 leading-7 text-gray-200 dark:text-gray-300">
                {CONTACT_DESCRIPTION}
              </p>
              <div className="flex items-center mt-5">
                <svg
                  className="h-6 mr-2 text-teal-600 dark:text-teal-400"
                  fill="currentColor"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 489.536 489.536"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <g>
                      <path d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,1.06581e-14 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z"></path>
                    </g>
                  </g>
                </svg>
                <span className="text-sm dark:text-gray-400">{ADDRESS_TEXT}</span>
              </div>
              <div className="flex items-center mt-5">
                <svg
                  className="h-6 mr-2 text-teal-600 dark:text-teal-400"
                  fill="currentColor"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 60.002 60.002"
                >
                  <g>
                    <path
                      d="M59.002,37.992c-3.69,0-6.693-3.003-6.693-6.693c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,4.794,3.899,8.693,8.693,8.693
      c0.553,0,1-0.447,1-1S59.554,37.992,59.002,37.992z"
                    ></path>
                    <path
                      d="M58.256,35.65c0.553,0,1-0.447,1-1s-0.447-1-1-1c-0.886,0-1.605-0.72-1.605-1.605c0-0.553-0.447-1-1-1s-1,0.447-1,1
      C54.65,34.033,56.267,35.65,58.256,35.65z"
                    ></path>
                    <path
                      d="M20.002,2.992c3.691,0,6.693,3.003,6.693,6.693c0,0.553,0.448,1,1,1s1-0.447,1-1c0-4.794-3.9-8.693-8.693-8.693
      c-0.552,0-1,0.447-1,1S19.449,2.992,20.002,2.992z"
                    ></path>
                    <path
                      d="M19.748,6.334c0,0.553,0.448,1,1,1c0.885,0,1.604,0.72,1.604,1.605c0,0.553,0.448,1,1,1s1-0.447,1-1
      c0-1.988-1.617-3.605-3.604-3.605C20.196,5.334,19.748,5.781,19.748,6.334z"
                    ></path>
                  </g>
                </svg>
                <span className="text-sm dark:text-gray-400">{PHONE_TEXT}</span>
              </div>
              <div className="flex items-center mt-5">
                <svg
                  className="h-6 mr-2 text-teal-600 dark:text-teal-400"
                  fill="currentColor"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 300.988 300.988"
                >
                  <g>
                    <path
                      d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493
          S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001
          s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z"
                    ></path>
                    <polygon points="142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883" />
                  </g>
                </svg>
                <span className="text-sm dark:text-gray-400">{REPLY_TEXT}</span>
              </div>
            </div>
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
                      onClick={handleSendEmail}
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

export default Contact;
