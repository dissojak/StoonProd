"use client";

import { useState } from "react";

export default function AdminFigmaForm() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/figma", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, link }),
      });
      if (!res.ok) throw new Error("Failed to add item");
      setSuccess("Figma item added!");
      setTitle("");
      setLink("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10 p-6 bg-zinc-900 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">Add Figma Item</h2>
      <input
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
        placeholder="Figma Embed Link"
        value={link}
        onChange={e => setLink(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Figma Item"}
      </button>
      {success && <div className="text-green-400">{success}</div>}
      {error && <div className="text-red-400">{error}</div>}
    </form>
  );
}
