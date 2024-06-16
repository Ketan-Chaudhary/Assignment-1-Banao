import React from "react";

const Banner = () => {
  return (
    <div class="relative  h-[28rem] text-white overflow-hidden mt-[0.7rem]">
      <div class="absolute inset-0">
        <img
          src="banner.png"
          alt="Background Image"
          class="object-cover object-center w-full h-full"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div
        class="relative z-10 flex flex-col justify-end items-start h-full text-center"
        style={{
          marginLeft: "12rem",
        }}
      >
        <h1
          class="font-bold leading-tight mb-4"
          style={{
            fontSize: "36px",
          }}
        >
          Computer Engineering
        </h1>
        <p
          class="mb-8"
          style={{
            fontSize: "18px",
          }}
        >
          142,765 Computer Engineers follow this
        </p>
      </div>
    </div>
  );
};

export default Banner;
