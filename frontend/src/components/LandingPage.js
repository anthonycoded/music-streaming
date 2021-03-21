import React, { useState, useEffect } from "react";
import axios from "axios";

import Trending from "./Trending";
import Newest from "./Newest";
import BeatGallery from "./BeatGallery";
import MediaPlayer from "./UI/MediaPlayer";

import download from "../assets/download.svg";
import dj from "../assets/gorilla.jpg";


const LandingPage = ({selectedTrack, setSelectedTrack}) => {
  const [tracklist, setTracklist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState();
  const [openPlayer, setOpenPlayer] = useState(false);
  const [newest, setNewest] = useState([]);
  const [playing, setPlaying] = useState(false);

  const getTrackList = async () => {
    let res = await axios
      .get("https://beatdealers.uk.r.appspot.com/tracks/get-tracklist")
      .then((res) => {
        let data = res.data;
        setTracklist(data);

        setNewest(data.sort((a, b) => a.created - b.created));
        setCurrentTrack(newest[0]);
      });
  };

  useEffect(() => {
    getTrackList();
  }, []);

  return (
    <div className="">
      <div className="p-4">
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "70vh" }}
        >
          <div className="h-48 w-full flex justify-center items-center">
            <img src={dj} alt="bear" className="h-48"></img>
          </div>
          <h1 className="text-yellow-400 text-center text-2xl font-bold p-4 pt-8">
            The number one source for the hardest hitting beats
          </h1>
        </div>
      </div>
      <Trending tracks={tracklist} setCurrentTrack={setCurrentTrack} setPlaying={setPlaying}></Trending>
      <Newest newest={newest} setCurrentTrack={setCurrentTrack}></Newest>

      <div
        className="bg-gray-800 m-8 rounded-xl px-2 py-4 flex flex-col items-center"
        style={{ height: "100%" }}
      >
        <p className="text-yellow-400 text-2xl text-center mb-8">
          How does it work?
        </p>
        <ul className="space-y-4">
          <li className="h-16 flex items-center p-4 space-x-4">
            <p className="text-yellow-400 font-bold text-3xl capitalize">1</p>
            <p className="text-white text-xl capitalize">
              Search our dope colection of beats
            </p>
          </li>
          <li className="h-16 flex items-center p-4 space-x-4">
            <p className="text-yellow-400 font-bold text-3xl capitalize">2</p>
            <p className="text-white text-xl capitalize">
              Find a beat you like
            </p>
          </li>
          <li className="h-16 flex items-center p-4 space-x-4">
            <p className="text-yellow-400 font-bold text-3xl capitalize">3</p>
            <p className="text-white text-xl w-full">
              Click{" "}
              <button className="bg-green-400 rounded-xl h-8 w-12">Buy</button>{" "}
              or <button className="bg-blue-400 rounded-xl w-16">Lease</button>{" "}
            </p>
          </li>
          <li className="h-16 flex items-center p-4 space-x-4">
            <p className="text-yellow-400 font-bold text-3xl capitalize">4</p>
            <p className="text-white text-xl capitalize">Download Beat</p>
            <img src={download} alt="download" className="h-8"></img>
          </li>
          <li className="h-16 flex items-center p-4 space-x-4">
            <p className="text-yellow-400 font-bold text-3xl capitalize">5</p>
            <p className="text-white text-xl capitalize">
              Lay your Fire track and Publish your masterpiece
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-yellow-400 h-48 w-full flex justify-center items-center ">
        <button className="bg-black w-96 h-24 rounded-2xl flex justify-center items-center">
          <p className="text-white text-2xl">Exclusive Apparel</p>
        </button>
      </div>
      <BeatGallery tracks={tracklist}></BeatGallery>
      <div className="mt-20">
        <MediaPlayer
          playing={playing}
          setPlaying={setPlaying}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          openPlayer={openPlayer}
          setOpenPlayer={setOpenPlayer}
          setSelectedTrack={setSelectedTrack}
          className="fixed"
        ></MediaPlayer>
      </div>
    </div>
  );
};

export default LandingPage;
