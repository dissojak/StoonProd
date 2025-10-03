"use client";

import React from "react";
import { SuccessMessage } from "./components/SuccessMessage";
import { ErrorMessage } from "./components/ErrorMessage";
import { ContactSidebar } from "./components/ContactSidebar";
import { useContactForm } from "./hooks/useContactForm";
import { ContactForm } from "./components/ContactForm";


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

export default Contact;
