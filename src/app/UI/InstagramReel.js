// components/InstagramReel.jsx
"use client"; // Add this at the top

const InstagramReel = ({ reelId }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "27%",
        height: "94vh",
        // paddingBottom: "120%",
        margin: "auto",
      }}
    >
      <iframe
        src={`https://www.instagram.com/reel/${reelId}/embed`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href={`https://www.instagram.com/reel/${reelId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Watch Full Reel on Instagram
          </button>
        </a>
      </div>
    </div>
  );
};

export default InstagramReel;
