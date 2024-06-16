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
} from "@chakra-ui/react";

import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

const CardLayout = () => {
  return (
    <Card>
      <CardBody>
        <Image
          src="card.png"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w="695px"
          h="220px"
        />
        <Stack mt="6" spacing="3">
          <Text> Type </Text>
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex>
          <Flex>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Text>Name</Text>
          </Flex>
          <Flex>
            <Text>Views</Text>
            <button>share</button>
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default CardLayout;
