"use client";
import { useEffect, useState } from "react";

export default function AdminFigmaOrder() {
  const [figmaItems, setFigmaItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/figma")
      .then((res) => res.json())
      .then((data) => {
        setFigmaItems(data);
        setOrder(data.map((item) => item._id));
        setLoading(false);
      });
  }, []);

  function moveItem(index, direction) {
    const newOrder = [...order];
    const target = direction === "up" ? index - 1 : index + 1;
    if (target < 0 || target >= newOrder.length) return;
    [newOrder[index], newOrder[target]] = [newOrder[target], newOrder[index]];
    setOrder(newOrder);
  }

  async function saveOrder() {
    setSaving(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/figma/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order }),
      });
      if (!res.ok) throw new Error("Failed to save order");
      setSuccess("Order saved!");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="text-center py-12">Loading Figma items...</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-zinc-900 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-6">Order Figma Items</h2>
      <ul className="space-y-4">
        {order.map((id, idx) => {
          const item = figmaItems.find((i) => i._id === id);
          if (!item) return null;
          return (
            <li key={id} className="flex items-center justify-between bg-zinc-800 p-4 rounded">
              <span className="font-semibold">{item.title}</span>
              <div className="space-x-2">
                <button
                  onClick={() => moveItem(idx, "up")}
                  disabled={idx === 0}
                  className="bg-zinc-700 text-white px-2 py-1 rounded disabled:opacity-50"
                >↑</button>
                <button
                  onClick={() => moveItem(idx, "down")}
                  disabled={idx === order.length - 1}
                  className="bg-zinc-700 text-white px-2 py-1 rounded disabled:opacity-50"
                >↓</button>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        onClick={saveOrder}
        disabled={saving}
        className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        {saving ? "Saving..." : "Save Order"}
      </button>
      {success && <div className="text-green-400 mt-4">{success}</div>}
      {error && <div className="text-red-400 mt-4">{error}</div>}
    </div>
  );
}
