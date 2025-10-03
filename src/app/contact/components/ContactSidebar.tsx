import React from "react";
import { CONTACT_DESCRIPTION, ADDRESS_TEXT, PHONE_TEXT, REPLY_TEXT } from "../constants";

export function ContactSidebar() {
  return (
    <div className="bg-gray-900 md:col-span-4 p-10 text-white dark:bg-gray-800 dark:text-gray-100">
      <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact :</p>
      <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
        Get In <span className="text-teal-500 dark:text-teal-400">Touch</span>
      </h3>
      <p className="mt-4 leading-7 text-gray-200 dark:text-gray-300">{CONTACT_DESCRIPTION}</p>
      <div className="flex items-center mt-5">
        {/* Address Icon */}
        <svg
          className="h-6 mr-2 text-teal-600 dark:text-teal-400"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 489.536 489.536"
        >
          <path d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,1.06581e-14 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z"></path>
        </svg>
        <span className="text-sm dark:text-gray-400">{ADDRESS_TEXT}</span>
      </div>
      <div className="flex items-center mt-5">
        {/* Phone Icon */}
        <svg
          className="h-6 mr-2 text-teal-600 dark:text-teal-400"
          fill="currentColor"
          viewBox="0 0 60.002 60.002"
        >
          <path d="M59.002,37.992c-3.69,0-6.693-3.003-6.693-6.693c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,4.794,3.899,8.693,8.693,8.693 c0.553,0,1-0.447,1-1S59.554,37.992,59.002,37.992z"></path>
          <path d="M58.256,35.65c0.553,0,1-0.447,1-1s-0.447-1-1-1c-0.886,0-1.605-0.72-1.605-1.605c0-0.553-0.447-1-1-1s-1,0.447-1,1 C54.65,34.033,56.267,35.65,58.256,35.65z"></path>
          <path d="M20.002,2.992c3.691,0,6.693,3.003,6.693,6.693c0,0.553,0.448,1,1,1s1-0.447,1-1c0-4.794-3.9-8.693-8.693-8.693 c-0.552,0-1,0.447-1,1S19.449,2.992,20.002,2.992z"></path>
          <path d="M19.748,6.334c0,0.553,0.448,1,1,1c0.885,0,1.604,0.72,1.604,1.605c0,0.553,0.448,1,1,1s1-0.447,1-1 c0-1.988-1.617-3.605-3.604-3.605C20.196,5.334,19.748,5.781,19.748,6.334z"></path>
        </svg>
        <span className="text-sm dark:text-gray-400">{PHONE_TEXT}</span>
      </div>
      <div className="flex items-center mt-5">
        {/* Reply Icon */}
        <svg
          className="h-6 mr-2 text-teal-600 dark:text-teal-400"
          fill="currentColor"
          viewBox="0 0 300.988 300.988"
        >
          <path d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493 S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001 s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z"></path>
          <polygon points="142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883" />
        </svg>
        <span className="text-sm dark:text-gray-400">{REPLY_TEXT}</span>
      </div>
    </div>
  );
}
