import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Flex,
  Text,
  Button,
  Select,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { MdErrorOutline, MdOutlineGroupAdd } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import PostCard from "../PostCard/PostCard";
import cardData from "../../assets/cardData.json";
import { IoMdExit } from "react-icons/io";
import Groups from "../Groups/Groups";
import "./ContentTop.css";

const ContentTop = () => {
  const tabName = ["All Post(32)", "Article", "Events", "Education", "Job"];
  const [selectedTab, setSelectedTab] = useState(tabName[0]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInGroup, setIsInGroup] = useState(false);

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  const filterCardData = (tab) => {
    if (tab === "All Post(32)") {
      return cardData;
    }
    return cardData.filter((card) => card.type === tab);
  };

  const handleJoinLeaveGroup = () => {
    setIsInGroup((prevIsInGroup) => !prevIsInGroup);
  };

  const handleDropdownChange = (event) => {
    setSelectedTab(event.target.value);
  };

  return (
    <section
      className="top-wrapper flex"
      style={{
        margin: "2rem 200px",
      }}
    >
      <div style={{ maxWidth: "44rem" }}>
        {isSmallScreen && (
          <Flex
            justifyContent="space-between"
            alignItems="center"
            mb={4}
            minW="22rem"
            marginLeft="1rem"
            marginTop="1.56rem"
          >
            <Text fontSize="xl" fontWeight="bold" color="#212529">
              Posts(368)
            </Text>
            <Select
              value={selectedTab}
              onChange={handleDropdownChange}
              maxWidth="150px"
              placeholder="Filter: All"
              bg="#F1F3F5"
              color="#212529"
              className="text-[#212529] font-bold "
              // w="22rem"
            >
              {tabName.map((tab, index) => (
                <option key={index} value={tab}>
                  {tab}
                </option>
              ))}
            </Select>
          </Flex>
        )}
        <Tabs
          variant="line"
          onChange={(index) => setSelectedTab(tabName[index])}
          display={isSmallScreen ? "none" : "block"}
        >
          <TabList>
            <Tab
              _selected={{ color: "black", borderColor: "black" }}
              color="#8A8A8A"
              fontSize="sm"
              p={3}
            >
              All Post(32)
            </Tab>
            {tabName.slice(1).map((tab, index) => (
              <Tab
                _selected={{ color: "black", borderColor: "black" }}
                color="#8A8A8A"
                fontSize="sm"
                p={3}
                key={index}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabName.map((tab, index) => (
              <TabPanel key={index}>
                <PostCard cardData={filterCardData(tab)} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        {isSmallScreen && <PostCard cardData={filterCardData(selectedTab)} />}
      </div>
      <div className="flex-col gap-5 top-ctn hidden lg:flex">
        <div
          className="icons-post flex justify-end gap-4"
          style={{ fontSize: "0.9rem" }}
        >
          <button className="btn btn-sm">
            Write a Post <RiArrowDownSFill />{" "}
          </button>
          {!isInGroup ? (
            <Button
              size="sm"
              background="#2F6CE5"
              fontSize="14px"
              fontWeight="100"
              color="white"
              _hover={{ background: "#2F6CE5", color: "white" }}
              leftIcon={<MdOutlineGroupAdd />}
              onClick={handleJoinLeaveGroup}
            >
              Join Group
            </Button>
          ) : (
            <Button
              size="sm"
              background="#989899"
              fontSize="14px"
              fontWeight="100"
              color="#6A6A6B"
              leftIcon={<IoMdExit />}
              onClick={handleJoinLeaveGroup}
            >
              Leave Group
            </Button>
          )}
        </div>
        <div
          className="post-right"
          style={{ marginLeft: "7rem", marginTop: "4rem" }}
        >
          <div className="post-right-static text-black">
            <label className="flex items-center gap-2 text-black">
              <FaLocationDot
                className="opacity-70"
                style={{ width: "1.12rem" }}
              />
              <input
                type="text"
                className="grow outline-none"
                value="Noida, India"
                style={{ fontSize: "0.9rem" }}
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
          <Divider mt={4} color="#B8B8B8" borderWidth={1.5} />
          <div className="flex gap-3 mt-[32px]" style={{ color: "#8A8A8A" }}>
            <MdErrorOutline style={{ width: "1.2rem" }} />
            <span style={{ fontSize: "12px" }}>
              Your location will help us serve better and extend a personalised
              experience.
            </span>
          </div>
          <div>
            {window.localStorage.getItem("NotAuthenticated") === "false" && (
              <>
                <div className="flex gap-5 mt-[3.375rem]">
                  <img
                    src="like.png"
                    alt=""
                    style={{
                      width: "18px",
                      height: "18px",
                    }}
                  />
                  <span className="uppercase">Recommended Groups</span>
                </div>
                <div>
                  <Groups />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTop;
