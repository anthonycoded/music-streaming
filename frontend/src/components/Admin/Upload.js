import React, { useState } from "react";
import axios from "axios";

import upload from "../../assets/upload.svg";
import StepTwo from "./UI/StepTwo";
import StepOne from "./UI/StepOne";
import StepThree from "./UI/StepThree";

const Upload = ({ open, setOpen }) => {
  const [step, setStep] = useState(1);
  const [audioFile, setAudioFile] = useState([]);
  const [audioUrl, setAudioUrl] = useState();
  const [imageFile, setImageFile] = useState([]);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [input, setInput] = useState({
    title: "",
    leasePrice: "",
    purchasePrice: "",
  });

  console.log(loading);

  const inputChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const uploadAudio = async () => {
    setLoading(true);
    const audio = new FormData();
    audio.append("audio", audioFile);
    let res = await axios
      .post("https://beatdealers.uk.r.appspot.com/audio/upload-audio", audio, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        let data = res.data;
        setLoading(false);
        setLoader(false);
        setStep(2);
        setAudioUrl(data.newAudio);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const publishBeat = async () => {
    setLoading(true);
    const date = Date.now();
    const newTrack = new FormData();
    newTrack.append("title", input.title);
    newTrack.append("image", image);
    newTrack.append("url", audioUrl);
    newTrack.append("created", date);

    let res = await axios
      .post(
        "https://beatdealers.uk.r.appspot.com/tracks/upload-track",
        newTrack,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(setLoading(false), setOpen(false));

    console.log(res);
    console.log(loading);
  };
  console.log(audioFile);
  const Buttons = () => (
    <div>
      {step === 1 ? (
        <div className="flex justify-end space-x-6">
          <button
            onClick={() => setOpen(false)}
            className="w-32 h-12 rounded-md shadow-sm font-medium hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              uploadAudio();
              setLoader(true);
            }}
            disabled={audioFile.length === 0 || loading === true ? true : false}
            type="button"
            className="h-12 w-32 rounded-md border bg-green-400 disabled:opacity-70 disabled:bg-green-500 shadow-sm px-4 py-2"
          >
            Next
          </button>
        </div>
      ) : step === 2 ? (
        <div className="flex justify-end space-x-6">
          <button
            onClick={() => setStep(1)}
            type="button"
            class="w-32 h-12 px-4 py-2 font-medium rounded-md shadow-sm bg-yellow-400  text-gray-500 hover:bg-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Back
          </button>
          <button
            onClick={() => setStep(3)}
            type="button"
            disabled={
              imageFile.length === 0 || input.title.length === 0 ? true : false
            }
            className="h-12 w-32  bg-green-400 disabled:opacity-70 disabled:bg-green-300 font-medium rounded-md border border-gray-300 shadow-sm px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Next
          </button>
        </div>
      ) : (
        <div className="flex justify-end space-x-6">
          <button
            onClick={() => setStep(2)}
            type="button"
            className="w-32 h-12 px-4 py-2 rounded-md shadow-sm font-medium bg-yellow-400  text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Back
          </button>
          <button
            onClick={publishBeat}
            type="button"
            className="h-12 w-32 px-4 py-2 rounded-md border shadow-sm font-medium  bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Publish
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div
          class="flex flex-col justify-between h-full w-full mx-12 md:h-5/6 md:mx-24 lg:mx-60 lg:w-5/6 bg-white p-4 rounded-lg text-left  shadow-xl transform transition-all"
          role="dialog"
        >
          <div className="w-full h-full">
            {step === 1 ? (
              <StepOne
                loader={loader}
                setLoader={setLoader}
                inputChange={inputChange}
                input={input}
                audioFile={audioFile}
                setAudioFile={setAudioFile}
              ></StepOne>
            ) : step === 2 ? (
              <StepTwo
                inputChange={inputChange}
                input={input}
                setImageFile={setImageFile}
                setImage={setImage}
              ></StepTwo>
            ) : (
              <StepThree input={input} imageFile={imageFile}></StepThree>
            )}
          </div>
          <div>
            <Buttons></Buttons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
