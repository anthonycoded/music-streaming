import React from 'react'

import download from "../assets/download.svg"

const Faqs = () => {
    return (
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
    );
}

export default Faqs
