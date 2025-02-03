import React from "react";

const LocationSearchPanel = () => {
  return (
    <div className="flex flex-col gap-3.5">
      {/* this is just sample data */}

      <div className="flex items-center justify-start gap-x-3">
        <h2 className="bg-[#eee] rounded-full w-10 h-8   flex items-center justify-center">
          <i className="ri-map-pin-fill" />
        </h2>
        <h4 className="font-medium">
          91A, Near Malleshwaram, ABCDXYZ, Bengaluru
        </h4>
      </div>

      <div className="flex items-center justify-start gap-x-3">
        <h2 className="bg-[#eee] rounded-full w-10 h-8   flex items-center justify-center">
          <i className="ri-map-pin-fill" />
        </h2>
        <h4 className="font-medium">
          91A, Near Malleshwaram, ABCDXYZ, Bengaluru
        </h4>
      </div>

      <div className="flex items-center justify-start gap-x-3">
        <h2 className="bg-[#eee] rounded-full w-10 h-8   flex items-center justify-center">
          <i className="ri-map-pin-fill" />
        </h2>
        <h4 className="font-medium">
          91A, Near Malleshwaram, ABCDXYZ, Bengaluru
        </h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
