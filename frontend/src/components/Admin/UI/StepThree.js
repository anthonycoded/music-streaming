import React from "react";

const StepThree = ({ input, imageFile }) => {
  return (
    <div className="flex flex-col items-center h-full w-full lg:p-4">
      <h3 class="text-2xl font-bold leading-6  text-gray-900 text-center mb-8">
        Review
      </h3>
      <div
        className=""
        style={{
          backgroundImage: `url(${imageFile})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "12em",
          width: "12em",
        }}
      ></div>
      <div className="h-full w-full flex flex-col items-center p-4">
        <p className="text-xl font-medium text-black">
          {input.title}
        </p>
        <p className="text-xl font-medium text-black text-left">
          Lease Price: ${input.leasePrice}
        </p>
        <p className="text-xl font-medium text-black text-left">
          Purchase Price: ${input.purchasePrice}
        </p>
      </div>
    </div>
  );
};

export default StepThree;
