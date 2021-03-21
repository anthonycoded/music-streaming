import React from "react";

const Newest = ({ newest }) => {
  if (newest === undefined) {
    return null;
  }

  return (
    <div className="flex flex-col content-center mb-8 p-4">
      <div className="mb-8">
        <p className="text-yellow-300 font-bold text-2xl">Newest Beats</p>
      </div>
      <div
        id="style-7"
        className="scrollbar flex flex-row overflow-x-scroll md:overflow-x-scroll lg:px-8 space-x-4 h-38"
      >
        {newest.map((track, i) => (
          <a key={i}>
            <div className="mb-2 ">
              <div
                className="h-48 w-60 lg:h-60 lg:w-80 flex flex-col items-center justify-center"
                key={i}
              >
                <div
                  className="w-full h-full"
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
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Newest;
