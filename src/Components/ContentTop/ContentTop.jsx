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
import PostCard from "../PostCard/PostCard";

const ContentTop = () => {
  const tabName = ["All Post(32)", "Article", "Events", "Education", "Job"];
  return (
    <section className="innerWidth top-wrapper flex">
      <div className="w-full">
        <Tabs variant="line" margin="2rem 200px">
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
            <TabPanel>Hellos</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div className="flex   gap-5 absolute top-ctn">
        <button className="btn btn-ghost">Write a Post</button>
        <button className="btn btn-ghost">Write a Post</button>
      </div>
    </section>
  );
};

export default ContentTop;
