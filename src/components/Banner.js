import ReactPlayer from "react-player/youtube";

const Banner = () => {
  return (
    <div>
      <div className="video-overlay" />
      <div className="home-banner-img">
        <p className="banner-title">EXPLORE THE UNIVERSE</p>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=xFsAG1YnaQs"
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
