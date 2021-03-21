import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import down from "../../assets/down.svg";
import download from "../../assets/download.svg";
import ellipsis from "../../assets/ellipsis.svg";
import like from "../../assets/blackheart.svg";
import next from "../../assets/next.svg";

const MediaPlayer = ({
  currentTrack,
  setCurrentTrack,
  setSelectedTrack,
  openPlayer,
  setOpenPlayer,
  playing,
  setPlaying,
}) => {
  if (currentTrack === undefined) {
    return null;
  }
  const history = useHistory();
  const [time, setTime] = useState("0:00");
  const [downloadOpen, setDownloadOpen] = useState(false);
  let audio = document.getElementById("audio");

  const pauseAudio = () => {
    setPlaying(false);
    audio.pause();
    let minutes = Math.floor(audio.currentTime / 60.00);
    let seconds = (audio.currentTime % 60.00.toPrecision())
    setTime(`${minutes}:${seconds}`)
  };
  console.log(time)
  const playAudio = () => {
    document.getElementById("audio").setAttribute("src", currentTrack.url);
    setPlaying(true);
    audio.play();
  };
  
  const selectTrack = async () => {
    await setSelectedTrack(currentTrack);
    history.push("/lease");
  };

  const PopUp = () => (
    <div className="w-full flex flex-col fixed h-48 p-4 inset bottom-0 bg-yellow-300">
      <div className="w-full h-12 flex justify-end items-start relative">
        <a
          className="fixed inset bottom-44"
          onClick={() => setDownloadOpen(false)}
        >
          close
        </a>
      </div>
      <div className="w-full h-full flex justify-center items-center space-x-5">
        <a
          onClick={() => selectTrack()}
          to="/lease"
          className="bg-red-400 w-32 h-12 text-xl font-medium flex items-center justify-center rounded-xl  py-4 px-8"
        >
          Lease
        </a>
        <p className="text-2xl font-bold">or </p>
        <a
          onClick={() => selectTrack()}
          to="/purchase"
          className="bg-blue-400 w-32 h-12 text-xl font-medium flex items-center justify-center rounded-xl  py-4 px-8"
        >
          Purchase
        </a>
      </div>
    </div>
  );

  const DetailedPlayer = () => (
    <div
      className="w-full rounded-t-2xl px-6 bg-yellow-400 fixed inset-x-0 bottom-0 space-y-6 flex flex-col items-center"
      style={{ height: "35em" }}
    >
      <div className="flex flex-col items-center justify-between w-full space-y-4">
        <div className="flex">
          <button className="mb-2" onClick={() => setOpenPlayer(false)}>
            <img src={down} alt="close player" className="h-8"></img>
          </button>
        </div>

        <div className="flex justify-center w-full h-full">
          <img src={currentTrack.image} alt="" className="h-60 w-72 "></img>
        </div>

        <div className="w-full flex-start">
          <p className="text-2xl font-bold capitalize">{currentTrack.title}</p>
          <p className="text-xl font-medium capitalize text-red-600">
            {currentTrack.title}
          </p>
        </div>

        <div className="pt-1 w-full mb-4">
          <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-red-200">
            <div
              style={{ width: "30%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
            ></div>
          </div>
          <div className="flex justify-between w-full px-2">
            <p>{audio.currentTime}</p>
            <p>{`"${audio.duration}"`}</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full px-24">
          <button className=" flex justify-center">
            <img
              className="h-8 transform rotate-180"
              src={next}
              alt="next button"
            ></img>
          </button>
          {playing ? (
            <button onClick={() => pauseAudio()} className="">
              <img
                className="h-12"
                src={pause}
                alt="play button"
              ></img>
            </button>
          ) : (
            <button onClick={() => playAudio()} className="">
              <img
                className="h-12"
                src={play}
                alt="pause button"
              ></img>
            </button>
          )}
          <button className=" flex justify-center">
            <img className="h-8" src={next} alt="next button"></img>
          </button>
        </div>
        <div className="flex w-full justify-between px-8 pb-6 h-full">
          <button>
            <img className="h-8" src={like} alt="like button"></img>
          </button>
          <button
            onClick={() => {
              setDownloadOpen(!downloadOpen);
            }}
          >
            <img className="h-8" src={download} alt="buy button"></img>
          </button>
        </div>
      </div>

      {downloadOpen ? <PopUp></PopUp> : undefined}
    </div>
  );

  const Player = () => (
    <div className="fixed inset-x-0 bottom-0 h-16 w-full bg-yellow-400 flex justify-between items-center">
      <button onClick={() => setOpenPlayer(true)}>
        <div
          className="h-16 w-32"
          style={{
            backgroundImage: `url("${currentTrack.image}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </button>

      <button onClick={() => setOpenPlayer(true)}>
        <p className="text-black text-2xl capitalize font-bold">
          {currentTrack.title}
        </p>
      </button>

      {playing ? (
        <button onClick={() => pauseAudio()} className="pr-8">
          <img className="h-10 float-right" src={pause} alt="play button"></img>
        </button>
      ) : (
        <button onClick={() => playAudio()} className="pr-8">
          <img className="h-10 float-right" src={play} alt="pause button"></img>
        </button>
      )}
    </div>
  );

  return (
    <div className="relative">
      {openPlayer ? <DetailedPlayer></DetailedPlayer> : <Player></Player>}
      <audio id="audio" loop onChange={() => pauseAudio()}>
        <source src="" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default MediaPlayer;
