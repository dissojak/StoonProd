import { useState, useEffect } from "react";

export default function FigmaPreview({ items }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center gap-y-20">
      {items.map((item, index) => {
        const [loading, setLoading] = useState(true);
        useEffect(() => {
          if (!loading) return;
          const timer = setTimeout(() => setLoading(false), 10000);
          return () => clearTimeout(timer);
        }, [loading]);
        return (
          <div key={index} className="w-[48%] h-[400px] relative">
            {loading && (
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/60 z-20 rounded-xl">
                <img
                  src={item.image || "/assets/images/contentCreation.svg"}
                  alt={item.title}
                  className="w-72 h-48 object-cover mb-4 rounded-3xl border border-white"
                />
                <div className="w-3/4 h-2 bg-zinc-700 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-green-500 animate-pulse" style={{ width: '100%' }}></div>
                </div>
                <span className="text-white text-lg font-semibold">Loading Figma preview...</span>
              </div>
            )}
            <iframe
              className="w-full h-full rounded-xl relative z-10"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              src={item.link}
              allowFullScreen
              title={item.title}
              onLoad={() => setLoading(false)}
            ></iframe>
            <h1 className="mt-4 text-xl font-semibold text-center relative z-20">{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
