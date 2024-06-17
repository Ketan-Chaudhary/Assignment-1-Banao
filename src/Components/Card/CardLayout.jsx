import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  Text,
  Flex,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { MdOutlineVisibility } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { GrMore } from "react-icons/gr";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

const CardLayout = ({ card }) => {
  return (
    <Card
      className="shadow-md "
      style={{
        border: "1px solid #E2E8F0",
      }}
    >
      <CardBody className=" w-[360px]  sm:w-[43rem]  " p={0}>
        <Image
          src="card.png"
          alt="card image"
          w="full"
          h="13rem"
          objectFit="cover"
        />
        <Stack
          spacing="3"
          style={{
            padding: "1.25rem",
          }}
        >
          <HStack>
            <img src={card.icon} alt="Icon" />
            <Text fontSize="18px" fontWeight="500">
              {card.type}{" "}
            </Text>
          </HStack>
          <HStack gap="1.5rem">
            <Heading w="37.5rem" fontSize="22px">
              {card.title}{" "}
            </Heading>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <GrMore />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </HStack>
          <Text color="#5C5C5C" fontSize="17px">
            {card.description}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <HStack className="flex flex-wrap justify-between w-full">
          <HStack>
            <HStack>
              <Avatar name={card.author.name} src={card.author.avatar} />
              <Text
                className="lg:text-[18px]"
                style={{
                  fontWeight: "semibold",
                  fontSize: "14px",
                }}
              >
                {" "}
                {card.author.name}{" "}
              </Text>
            </HStack>
          </HStack>
          <HStack gap="2.5rem">
            <Text
              className="hidden lg:block"
              style={{
                fontSize: "14px",
                color: "#525252",
              }}
            >
              {" "}
              <Icon as={MdOutlineVisibility} /> {card.views}{" "}
            </Text>
            <button className="btn btn-square btn-sm ">
              {" "}
              <FaShareAlt />{" "}
            </button>
          </HStack>
        </HStack>
      </CardFooter>
      <Divider />
    </Card>
  );
};

export default CardLayout;
