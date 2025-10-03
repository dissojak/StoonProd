import React from "react";
import { ERROR_TITLE, ERROR_BODY } from "../constants";

interface ErrorMessageProps {
  onHome: () => void;
  onSendAnother: () => void;
}

export function ErrorMessage({ onHome, onSendAnother }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="bg-red-100 rounded-full p-4 mb-4">
        <svg className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-red-600 mb-2">{ERROR_TITLE}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">{ERROR_BODY}</p>
      <div className="flex flex-row gap-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-teal-700 font-bold py-2 px-4 rounded flex items-center gap-2" onClick={onHome}>
          Go Home
        </button>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" onClick={onSendAnother}>
          Try Again
        </button>
      </div>
    </div>
  );
}
