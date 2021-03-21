import React, { useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const StepOne = ({ loader, audioFile, setAudioFile }) => {
  
  const selectFile = (e) => {
    setAudioFile(e.target.files[0]);
    console.log(e.target.file[0]);
  };
  const Uploader = () => (
    <div className="h-full w-60">
      <div class="mt-2">
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div class="space-y-1 text-center">
            <div class="flex flex-col text-sm text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload an audio file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                  onChange={(e) => selectFile(e)}
                />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500">MP3, MPGA, WAV up to 50MB</p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="h-96 relative w-full flex flex-col items-center">
      <h3 class="text-2xl font-bold leading-6  text-gray-900 text-center mb-8 lg:p-4">
        Add audio to your new beat
      </h3>
      <div className="w-full flex justify-center">
        <Uploader></Uploader>
      </div>
      <div  className="w-full flex flex-col space-y-4 mt-8 p-4 lg:ml-60">
        <p>Audio File Name: {audioFile.name}</p>
        <p>File Size: {audioFile.size}</p>
        <p>File Type: {audioFile.type}</p>
      </div>
      <div className="absolute block w-full inset top-64 left-10">
        <PacmanLoader color="#ffea00" loading={loader} size={50}></PacmanLoader>
      </div>
    </div>
  );
};

export default StepOne;
