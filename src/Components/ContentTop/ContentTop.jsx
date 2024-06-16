import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Flex,
  HStack,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import "./ContentTop.css";
import { FaLocationDot } from "react-icons/fa6";
import { Divider } from "@chakra-ui/react";
import { MdErrorOutline } from "react-icons/md";
import PostCard from "../PostCard/PostCard";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineGroupAdd } from "react-icons/md";

const ContentTop = () => {
  const tabName = ["All Post(32)", "Article", "Events", "Education", "Job"];
  return (
    <section
      className="top-wrapper flex  "
      style={{
        margin: "2rem 200px",
      }}
    >
      <div
        className=""
        style={{
          maxWidth: "44rem",
        }}
      >
        <Tabs variant="line">
          <TabList>
            {tabName.map((tab) => (
              <Tab
                _selected={{
                  color: "black",
                  borderColor: "black",
                }}
                color="#8A8A8A"
                fontSize="sm"
                p={3}
                key={tab}
              >
                {tab}{" "}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              {" "}
              <PostCard />{" "}
            </TabPanel>
            <TabPanel>Working</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div className="flex  flex-col  gap-5  top-ctn ">
        <div
          className="icons-post flex justify-end gap-[1rem]"
          style={{
            fontSize: "0.9rem",
            wordSpacing: "0.2rem",
          }}
        >
          <button className="btn btn-sm ">
            Write a Post <RiArrowDownSFill />{" "}
          </button>
          <button
            className="btn btn-sm  text-white"
            style={{
              background: "#2F6CE5",
            }}
          >
            {" "}
            <MdOutlineGroupAdd /> Join Group
          </button>
        </div>

        <div
          className="post-right"
          style={{
            marginLeft: "7rem",
            marginTop: "4rem",
          }}
        >
          <div className="post-right-static text-black ">
            <label className=" flex items-center gap-2 text-black">
              <FaLocationDot
                className="opacity-70"
                style={{
                  width: "1.12rem",
                }}
              />
              <input
                type="text"
                className="grow outline-none"
                value="Noida, India"
                style={{
                  fontSize: "0.9rem",
                }}
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
            className="flex gap-3 mt-[32px]"
            style={{
              color: "#8A8A8A",
            }}
          >
            <MdErrorOutline
              style={{
                width: "1.2rem",
              }}
            />
            <span
              className=""
              style={{
                fontSize: "12px",
              }}
            >
              Your location will help us serve better and extend a personalised
              experience.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTop;
