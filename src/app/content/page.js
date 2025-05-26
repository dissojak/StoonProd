import Navbar from "../../UI/Header/Navbar";
import InstagramReel from "../../UI/InstagramReel";
import YouTubeVideo from "../../UI/YouTubeVideo"; // Import the YouTube component

const Content = () => {
  const instaReel_1 = "CasQwfslT7H";
  const instaReel_2 = "CyQygF9NF9d";
  const instaReel_3 = "ClE2RgPOdNR";
  const youtubeVideoId = "dQw4w9WgXcQ"; // Replace with the actual YouTube video ID

  return (
    <>
      <span className="bg-teal-500 w-full h-full block">
        <Navbar />
      </span>
      <section className="m-auto bg-white text-black dark:bg-gray-900 dark:text-white py-20">
        <div>
          <h1>Check out our latest Instagram reel!</h1>
          <div className="flex space-x-4 justify-center">
            {" "}
            {/* Flex container to align items horizontally */}
            <InstagramReel reelId={instaReel_1} />
            <InstagramReel reelId={instaReel_2} />
            <InstagramReel reelId={instaReel_3} />
          </div>
          <h1 className="mt-10">Watch our latest YouTube video!</h1>
          <YouTubeVideo videoId={youtubeVideoId} />{" "}
          {/* Add the YouTube video component */}
        </div>
      </section>
    </>
  );
};

export default Content;
