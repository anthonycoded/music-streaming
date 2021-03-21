import React, { useEffect } from "react";

const Slides = ({ tracks, selectTrack }) => {
  console.log(tracks);
  let sortedList = tracks.sort((a, b) => b.plays - a.plays);

  const tracklist = sortedList.slice(0, 10);

  return (
    <React.Fragment>
      {tracklist ? (
        <div
          id="style-7"
          className="scrollbar flex flex-row lg:px-8 overflow-x-scroll md:overflow-x-scroll space-x-4 h-full"
        >
          {tracklist.map((track, i) => (
            <a key={i} className="mb-2" onClick={() => selectTrack(track)}>
              <div className="h-full w-72 lg:w-96 flex flex-col items-center justify-center">
                <div
                  className="w-full h-48 lg:h-60"
                  style={{
                    backgroundImage: `url("${track.image}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-yellow-300 font-bold text-2xl my-2 capitalize">
                  {track.title}
                </p>
              </div>              
            </a>
          ))}
        </div>
      ) : undefined}
    </React.Fragment>
  );
};

export default Slides;
