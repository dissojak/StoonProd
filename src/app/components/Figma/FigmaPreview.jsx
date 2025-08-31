import { useState, useEffect } from "react";
import Image from "next/image";

export default function FigmaPreview({ items }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center gap-y-20">
      {items.map((item, index) => (
        <FigmaPreviewItem key={index} item={item} />
      ))}
    </div>
  );
}

function FigmaPreviewItem({ item }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!loading) return;
    let start = Date.now();
    const duration = 20000; // 20 seconds
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(percent);
      if (percent >= 100) {
        setLoading(false);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [loading]);
  return (
    <div className="w-[48%] h-[400px] relative">
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/60 z-20 rounded-xl">
          <Image
            src={item.image || "/assets/images/contentCreation.svg"}
            alt={item.title}
            width={288}
            height={192}
            className="w-72 h-48 object-cover mb-4 rounded-3xl border border-white"
            priority
          />
          <div className="w-3/4 h-2 bg-zinc-700 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-green-500 transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-white text-lg font-semibold">
            Loading Figma preview... {progress}%
          </span>
        </div>
      )}
      <iframe
        className="w-full h-full rounded-xl relative z-10"
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        src={item.link}
        allowFullScreen
        title={item.title}
      ></iframe>
      <h1 className="mt-4 text-xl font-semibold text-center relative z-20">
        {item.title}
      </h1>
    </div>
  );
}
