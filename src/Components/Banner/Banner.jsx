import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

const Banner = () => {
  const [isInGroup, setIsInGroup] = useState(false);

  const handleJoinLeaveGroup = () => {
    setIsInGroup((prevIsInGroup) => !prevIsInGroup);
  };

  return (
    <div className="relative h-[28rem] text-white overflow-hidden mt-0 lg:mt-[0.7rem]">
      <div className="absolute inset-0">
        <img
          src="banner.png"
          alt="Background Image"
          className="object-cover object-center w-full h-full lg:w-full lg:h-full absolute left-0 top-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-end items-start h-full text-center ml-[1rem] lg:ml-[12rem]">
        <h1 className="font-bold leading-tight mb-4 text-[12px] lg:text-[36px]">
          Computer Engineering
        </h1>
        <p className="mb-8 text-[12px] lg:text-[18px]">
          142,765 Computer Engineers follow this
        </p>

        {/* Buttons for small screens */}
        <div className="flex sm:hidden absolute top-0 ml-[1rem] mb-4 justify-between w-[90%] mt-2">
          <button
            className="text-white font-semibold cursor-pointer py-2 px-4 rounded mr-4"
            onClick={() => alert("Go back")}
          >
            <FaArrowLeft />
          </button>

          {!isInGroup ? (
            <Button
              size="sm"
              className=" text-white font-light border py-2 px-4 rounded text-[12px]"
              background="transparent"
              color="white"
              fontWeight="light"
              _hover={{ background: "transparent", color: "white" }}
              onClick={handleJoinLeaveGroup}
            >
              Join Group
            </Button>
          ) : (
            <Button
              size="sm"
              className=" text-white font-light border py-2 px-4 rounded text-[12px]"
              color="white"
              background="transparent"
              fontWeight="light"
              _hover={{ background: "transparent", color: "white" }}
              onClick={handleJoinLeaveGroup}
            >
              Leave Group
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
