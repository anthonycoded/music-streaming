import React from "react";

import Slides from "../components/UI/Slides";
import "./trending.css";

const Trending = ({ tracks, setCurrentTrack, setPlaying }) => {
  const selectTrack = (track) => {
    setCurrentTrack(track);
    setPlaying(false);
    audio.pause();
  };
  return (
    <div className="flex flex-col content-center mb-12 p-4">
      <div className="mb-8">
        <p className="text-yellow-300 font-bold text-2xl">
          Trending Right Now!
        </p>
      </div>
      <div className="lg:h-72">
        <Slides tracks={tracks} selectTrack={selectTrack}></Slides>
      </div>
    </div>
  );
};

export default Trending;
