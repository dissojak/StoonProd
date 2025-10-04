"use client";

import React, { Suspense } from "react";
import Footer from "@/components/shared/Footers/Footer";
import { SuccessMessage } from "./components/SuccessMessage";
import { ErrorMessage } from "./components/ErrorMessage";
import { ContactSidebar } from "./components/ContactSidebar";
import { useContactForm } from "./hooks/useContactForm";
import { ContactForm } from "./components/ContactForm";


function ContactInner() {
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
      <Footer />
    </>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="p-8">Loading contact form...</div>}>
      <ContactInner />
    </Suspense>
  );
}
