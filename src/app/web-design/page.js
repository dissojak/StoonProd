"use client";

import FigmaPreview from "../components/Figma/FigmaPreview";

const figmaItems = [
  {
    title: "BookBox",
    link: "https://embed.figma.com/design/BiVMsCSXk86Coe1xPZjphV/v0_bookbox?node-id=0-1&embed-host=share",
  },
  {
    title: "Flashbacky",
    link: "https://embed.figma.com/design/yBYi1hWoIcZID6T9jH5rZU/Flashbacy?node-id=4-3&embed-host=share",
  },
];

const WebDesign = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FigmaPreview items={figmaItems} />
      </div>
    </section>
  );
};

export default WebDesign;
