export default function FigmaPreview({ items }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {items.map((item, index) => (
        <div key={index} className="w-[48%] h-[400px]">
          <iframe
            className="w-full h-full rounded-xl"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            src={item.link}
            allowFullScreen
            title={item.title}
          ></iframe>
          <h1 className="mt-4 text-xl font-semibold text-center">{item.title}</h1>
        </div>
      ))}
    </div>
  );
}
