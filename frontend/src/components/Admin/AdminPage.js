import React, { useState } from "react";

import Modal from "./Upload";
import upload from "../../assets/upload.svg";

const AdminPage = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col items-center p-4">
      <p className="text-white font-bold text-2xl p-4">
        Upload new Beat for sale
      </p>
      <div className="h-full flex items-center">
        <button
          onClick={() => setOpen(true)}
          className="bg-yellow-400 text-xl rounded full h-12 w-28 flex justify-center items-center"
        >
          Upload
          <img src={upload} alt="upload" className="h-8 ml-2"></img>
        </button>
      </div>
      {open ? <Modal open={open} setOpen={setOpen}></Modal> : undefined}
    </div>
  );
};

export default AdminPage;
