import React from "react";
import CardLayout from "../Card/CardLayout";
import { FaLocationDot } from "react-icons/fa6";
import { Divider } from "@chakra-ui/react";
import { MdErrorOutline } from "react-icons/md";

const PostCard = () => {
  return (
    <section className="innerWidth flex mt-[28px] gap-[105px] post-wrapper">
      <div className="post-left">
        {" "}
        <CardLayout /> <CardLayout />{" "}
      </div>
      <div className="post-right w-[250px]">
        <div className="post-right-static ">
          <label className=" flex items-center gap-2 text-black">
            <FaLocationDot className="w-4 h-4 opacity-70" />
            <input
              type="text"
              className="grow outline-none"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <Divider className="mt-4" color="#B8B8B8" borderWidth={1.5} />
        <div
          className="flex gap-7 mt-[32px]"
          style={{
            color: "#8A8A8A",
          }}
        >
          <MdErrorOutline
            style={{
              fontSize: "2.5rem",
            }}
          />
          <span
            className="w-[200px]"
            style={{
              fontSize: "12px",
            }}
          >
            Your location will help us serve better and extend a personalised
            experience.
          </span>
        </div>
      </div>
    </section>
  );
};

export default PostCard;
