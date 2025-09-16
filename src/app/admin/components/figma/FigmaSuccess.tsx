"use client";

export default function FigmaSuccess({ onAddMore }: { onAddMore: () => void }) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-green-900 rounded-lg shadow flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2 text-green-300">Figma item added!</h2>
      <button
        onClick={onAddMore}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Another Figma Item
      </button>
    </div>
  );
}
