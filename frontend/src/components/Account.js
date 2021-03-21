import React, { useState } from "react";

const Account = () => {
  const tracklist = useState([]);
  return (
    <div className="h-full w-full bg-black flex flex-col items-center p-4">
      <p className="text-yellow-400 text-2xl font-bold">My Beats</p>
      {tracklist ? (
        <div className="w-full mx-4">
          <div
            id="style-7"
            className="h-full w-full scrollbar flex flex-row  overflow-x-scroll space-x-4  lg:px-8"
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
        </div>
      ) : (
        <p>You do not have any beats purchased or leased. </p>
      )}
    </div>
  );
};

export default Account;
