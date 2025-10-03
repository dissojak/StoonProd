import React from "react";
import { ContactFormErrors } from "../utils/contactFormUtils";

export type ContactFormProps = {
  formRef: React.RefObject<HTMLFormElement>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: ContactFormErrors;
  inputClass: (error?: string) => string;
};

export function ContactForm({ formRef, handleSubmit, errors, inputClass }: ContactFormProps) {
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

export default ContactForm;
