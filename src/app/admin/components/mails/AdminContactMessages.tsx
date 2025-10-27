"use client";
import { useEffect, useState } from "react";

type ContactMessage = {
  _id: string;
  fullName: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string | number | Date;
};

export default function AdminContactMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/contact-messages")
      .then((res) => res.json())
      .then((data: ContactMessage[]) => {
        setMessages(data);
        setLoading(false);
      });
  }, []);

  const renderContent = () => {
    if (loading) {
      return <div>Loading messages...</div>;
    }

    if (messages.length === 0) {
      return <div className="text-gray-500">No messages found.</div>;
    }

    return (
      <ul className="space-y-6">
        {messages.map((msg) => (
          <li key={msg._id} className="border rounded-lg p-6 bg-white shadow">
            <div className="font-bold text-lg mb-2">{msg.fullName}</div>
            <div className="text-sm text-gray-600 mb-1">Phone: {msg.phone}</div>
            <div className="text-sm text-gray-600 mb-1">Email: {msg.email}</div>
            <div className="mt-2 text-gray-800">{msg.message}</div>
            <div className="mt-2 text-xs text-gray-400">
              {new Date(msg.createdAt).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin: Contact Messages</h1>
      {renderContent()}
    </div>
  );
}
