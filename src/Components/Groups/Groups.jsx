import React from "react";

const Groups = () => {
  return (
    <div className="mt-[1.5rem] flex flex-col gap-[1.375rem]">
      <div className="flex justify-between items-center gap-[2.5rem] ">
        <div className="flex items-center gap-5">
          <img src="leisure.png" alt="" />
          <span>Leisure</span>
        </div>
        <button
          className="bg-[#EDEEF0] btn btn-sm rounded-2xl text-[12px] "
          style={{
            margin: "4px 12px",
            fontSize: "12px",
            fontWeight: "100",
          }}
        >
          Follow
        </button>
      </div>
      <div className="flex justify-between items-center gap-[2.5rem] ">
        <div className="flex items-center gap-5">
          <img src="activism.png" alt="" />
          <span>Activism</span>
        </div>
        <button
          className="bg-[#EDEEF0] btn btn-sm rounded-2xl text-[12px] "
          style={{
            margin: "4px 12px",
            fontSize: "12px",
            fontWeight: "100",
          }}
        >
          Follow
        </button>
      </div>
      <div className="flex justify-between items-center gap-[2.5rem] ">
        <div className="flex items-center gap-5">
          <img src="mba.png" alt="" />
          <span>MBA</span>
        </div>
        <button
          className="bg-[#EDEEF0] btn btn-sm rounded-2xl text-[12px] "
          style={{
            margin: "4px 12px",
            fontSize: "12px",
            fontWeight: "100",
          }}
        >
          Follow
        </button>
      </div>
      <div className="flex justify-between items-center gap-[2.5rem] ">
        <div className="flex items-center gap-5">
          <img src="philosophy.png" alt="" />
          <span>Philosophy</span>
        </div>
        <button
          className="bg-[#EDEEF0] btn btn-sm rounded-2xl text-[12px] "
          style={{
            margin: "4px 12px",
            fontSize: "12px",
            fontWeight: "100",
          }}
        >
          Follow
        </button>
      </div>

      <span
        style={{
          color: "#2F6CE5",
          fontSize: "12px",
          display: "flex",
          justifyContent: "end",
          marginTop: "3.375rem",
        }}
      >
        See More...
      </span>
    </div>
  );
};

export default Groups;
