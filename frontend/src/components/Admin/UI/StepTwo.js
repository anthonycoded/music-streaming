import React, { useState } from "react";

const StepTwo = ({ input, inputChange, setImageFile, imageFile, setImage }) => {
  const selectImage = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
    console.log(imageFile);
  };
  const ImageUploader = () => (
    <div className="h-full w-60">
      <div class="mt-2">
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div class="space-y-1 text-center">
            <div class="flex flex-col text-sm text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload an image</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                  onChange={(e) => selectImage(e)}
                />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500">jpg, png, svg up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col items-center h-full w-full">
      <h3 class="text-2xl font-bold leading-6  text-gray-900 text-center mb-8">
        Upload details
      </h3>
      <div className="w-96 p-8 mb-8">
        <div className="flex flex-col mb-4">
          <label className="">New Beat Name</label>
          <input
            key="title"
            type="text"
            name="title"
            className="ring-2 rounded"
            onChange={inputChange}
            value={input.title}
          ></input>
        </div>
        <div className="w-full flex justify-center space-x-4 lg:space-x-24">
          <div className="flex flex-col w-28">
            <label className="">Lease Price: </label>
            <input
              key="leasePrice"
              type="text"
              name="leasePrice"
              className="ring-2 rounded"
              onChange={inputChange}
              value={input.leasePrice}
            ></input>
          </div>
          <div className="flex flex-col w-28">
            <label className="">Purchase Price:</label>
            <input
              key="PurchasePrice"
              type="text"
              name="purchasep=Price"
              className="ring-2 rounded"
              onChange={inputChange}
              value={input.purchasePrice}
            ></input>
          </div>
        </div>
      </div>
      <div className="flex w-full  justify-center">
        <ImageUploader></ImageUploader>
      </div>
    </div>
  );
};

export default StepTwo;
