import React from "react";
import { SUCCESS_TITLE, SUCCESS_BODY } from "../constants";

interface SuccessMessageProps {
  onHome: () => void;
  onSendAnother: () => void;
  onSendEmail: () => void;
}

export function SuccessMessage({ onHome, onSendAnother, onSendEmail }: SuccessMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="bg-green-100 rounded-full p-4 mb-4">
        <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-green-600 mb-2">{SUCCESS_TITLE}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">{SUCCESS_BODY}</p>
      <div className="flex flex-row gap-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-teal-700 font-bold py-2 px-4 rounded flex items-center gap-2" onClick={onHome}>
          Go Home
        </button>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" onClick={onSendAnother}>
          Send Another Message
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-teal-700 font-bold py-2 px-4 rounded flex items-center gap-2" onClick={onSendEmail}>
          <svg className="h-5 w-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.94 6.94A2 2 0 014 6h12a2 2 0 011.06.94l-7.06 4.41-7.06-4.41zM18 8.08V14a2 2 0 01-2 2H4a2 2 0 01-2-2V8.08l7.47 4.67a1 1 0 001.06 0L18 8.08z" />
          </svg>
          Send Email
        </button>
      </div>
    </div>
  );
}
