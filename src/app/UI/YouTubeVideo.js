"use client"; // Add this at the top

const YouTubeVideo = ({ videoId }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "70%",
        height: 0,
        paddingBottom: "56.25%", // Aspect ratio for 16:9 video
        margin: "auto",
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        // allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "70%",
        }}
      ></iframe>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Watch on YouTube
          </button>
        </a>
      </div>
    </div>
  );
};

export default YouTubeVideo;
