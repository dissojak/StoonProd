"use client";
import { useEffect, useState } from "react";

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/contact-messages")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Contact Messages</h1>
      {loading ? (
        <div>Loading messages...</div>
      ) : messages.length === 0 ? (
        <div className="text-gray-500">No messages found.</div>
      ) : (
        <ul className="space-y-6">
          {messages.map((msg) => (
            <li key={msg._id} className="border rounded-lg p-6 bg-white shadow">
              <div className="font-bold text-lg mb-2">{msg.fullName}</div>
              <div className="text-sm text-gray-600 mb-1">Phone: {msg.phone}</div>
              <div className="text-sm text-gray-600 mb-1">Email: {msg.email}</div>
              <div className="mt-2 text-gray-800">{msg.message}</div>
              <div className="mt-2 text-xs text-gray-400">{new Date(msg.createdAt).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
