"use client";

import { useState } from "react";
import FigmaSuccess from "./FigmaSuccess";

export default function AdminFigmaForm() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!imageFile) {
      setError("Please select an image to upload.");
      return;
    }
    setLoading(true);
    setSuccess(false);
    setError("");
    let imageUrl = "";
    try {
      const formData = new FormData();
      formData.append("file", imageFile);
      const uploadRes = await fetch("/api/figma/upload", {
        method: "POST",
        body: formData,
      });
      if (!uploadRes.ok) throw new Error("Image upload failed");
      const uploadData = await uploadRes.json();
      imageUrl = uploadData.url;
      if (!imageUrl) throw new Error("No image URL returned from Cloudinary");
      const res = await fetch("/api/figma", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, link, image: imageUrl }),
      });
      if (!res.ok) throw new Error("Failed to add item");
      setSuccess(true);
      setTitle("");
      setLink("");
      setImageFile(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleAddMore() {
    setSuccess(false);
    setError("");
  }

  if (success) {
    return <FigmaSuccess onAddMore={handleAddMore} />;
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
      <input
        type="file"
        accept="image/*"
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
        onChange={e => setImageFile(e.target.files[0])}
        required
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Figma Item"}
      </button>
      {error && <div className="text-red-400">{error}</div>}
    </form>
  );
}
