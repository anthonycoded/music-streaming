import React from 'react'

const BeatGallery = ({tracks}) => {
  console.log(tracks)

    return (
      <div className="p-4">
        <p className="text-bold text-yellow-400 text-2xl font-bold mb-8">
          Beat Gallery
        </p>
        <div className="grid grid-cols-3 items-center justify-center w-full">
          {tracks.map((track, i) => (
            <button key={i} className="flex flex-col items-center justify-center">
              <div
                className="h-24 w-28 flex flex-col justify-center items-center"
                style={{
                  backgroundImage: `url("${track.image}")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-yellow-300 font-medium text-xl my-2 capitalize">{track.title}</p>
            </button>
          ))}
        </div>
      </div>
    );
}

export default BeatGallery
