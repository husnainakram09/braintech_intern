"use client";
import GetStartedBtn from "@/src/ui/GetStartedBtn";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Technology: React.FC<Props> = ({}) => {
  return (
    <Box px={10} py={100} bgColor={"#F6F7F9"} textAlign={"center"}>
      <Box maxW={"500px"} m={"auto"}>
        <Text color={"#F27C1E"} as={"b"}>
          TECHNOLOGY INDEX
        </Text>
        <Text fontWeight={700} fontSize={"3xl"}>
          What Technology We Are Using For Our Valued Customers
        </Text>
      </Box>
      <Flex
        flexWrap={"wrap"}
        justify={"space-around"}
        align={"center"}
        gap={5}
        mt={10}
      >
        {Array.from({ length: 18 }).map((_, key) => (
          <Center
            flex={[`${100 / 3}%`, `${100 / 5}%`, `${100 / 7}%`]}
            key={key}
          >
            <Image
              src={`/images/${key + 1}.png`}
              w={"60%"}
              objectFit={"contain"}
            />
          </Center>
        ))}
      </Flex>
      <Center mt={20}>
        <GetStartedBtn />
      </Center>
    </Box>
  );
};

export default Technology;
