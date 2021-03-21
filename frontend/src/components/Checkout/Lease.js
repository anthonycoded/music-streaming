import React, { useEffect } from "react";
import {useHistory} from "react-router-dom"

const Lease = ({ selectedTrack }) => {
  const history = useHistory();
  const track = { ...selectedTrack };
  useEffect(() => {
    console.log(selectedTrack);
    console.log(track)
  }, [selectedTrack]);

  return (
    <div className="h-full w-full">
      <div className="h-full w-full bg-yellow-400 flex flex-col p-4">
        <div className="h-48 w-full">
          <div
            className="h-32 w-48"
            style={{
              backgroundImage: `url(${track.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col p-8 ">
            <p>{track.title}</p>
            <p>{track.leasePrice}</p>
          </div>
        </div>
        <p className="font-bold text-2xl p-4">
          Ready to lease this beat? It's simple.
        </p>
      </div>
      <div className="bg-gray-400 h-full w-full">
        <a className="bg-green-400 w-32 h-12 flex items-center justify-center text-2xl font-bold rounded-xl px2 py-2"> to MyBeats</a>
      </div>
    </div>
  );
};

export default Lease;
