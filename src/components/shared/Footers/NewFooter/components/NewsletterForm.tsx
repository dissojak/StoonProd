"use client";
import React from "react";
import { useNewsletterForm } from "../hooks/useNewsletterForm";

const NewsletterForm: React.FC = () => {
  const { email, error, submitted, onChange, onSubmit, reset } = useNewsletterForm();

  return (
    <div className="block xl:py-16 col-span-full md:col-span-4 xl:col-span-3">
      <h4 className="text-lg text-emerald-950 dark:text-white font-bold mb-9 text-center xl:text-left">
        Newsletter
      </h4>
      <form onSubmit={onSubmit} className="grid gap-4">
        <input
          type="email"
          name="email"
            aria-label="newsletter-email"
          value={email}
          onChange={onChange}
          className="py-2 px-4 border border-gray-300 shadow-sm h-14 text-lg text-gray-800 rounded-full w-full xl:w-64 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Enter email.."
        />
        {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
        {submitted ? (
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-teal-600">Subscribed! 🎉</p>
            <button
              type="button"
              onClick={reset}
              className="text-xs text-gray-600 hover:underline"
            >
              Add another
            </button>
          </div>
        ) : (
          <button
            type="submit"
            className="flex gap-2 justify-center items-center py-3.5 px-7 rounded-full text-white bg-teal-600 shadow-md w-fit transition-all duration-500 mx-auto xl:mx-0 hover:bg-teal-700"
          >
            Subscribe
            <svg
              width="17"
              height="13"
              viewBox="0 0 17 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 6.88281L14.8333 6.88281M10.6667 11.8828L15.0774 7.47207C15.3552 7.19429 15.4941 7.0554 15.4941 6.88281C15.4941 6.71022 15.3552 6.57133 15.0774 6.29356L10.6667 1.88281"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;
