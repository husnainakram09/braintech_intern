import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const projectsData = [
  {
    image: "/images/project-1.jpg",
    title: "Software",
    name: "Project Engineering",
  },
  {
    image: "/images/project-2.jpg",
    title: "Software",
    name: "Analytic Solutions",
  },
  {
    image: "/images/project-3.jpg",
    title: "Software",
    name: "Product Design",
  },
  {
    image: "/images/project-4.jpg",
    title: "Software",
    name: "Growth Strategies",
  },
  {
    image: "/images/project-5.jpg",
    title: "Software",
    name: "Platform Integration",
  },
  {
    image: "/images/project-6.jpg",
    title: "Software",
    name: "Innovative Interfaces",
  },
];
const Projects: React.FC<Props> = ({}) => {
  return (
    <Box
      px={10}
      py={100}
      bgColor={"#F6F7F9"}
      textAlign={"center"}
      id="portfolios"
    >
      <Box maxW={"500px"} m={"auto"}>
        <Text color={"#F27C1E"} as={"b"}>
          PROJECTS
        </Text>
        <Text fontSize={"3xl"} fontWeight={700} mt={5}>
          We Are Increasing Business Success With Technology
        </Text>
        <Text mt={5}>Our Recent Launched Projects Available into Market</Text>
      </Box>
      <Flex wrap={"wrap"} justify={"center"} gap={10} mt={10}>
        {projectsData.map((data: any, key: any) => (
          <Box key={key}>
            <Box
              bgImage={data.image}
              h={"230px"}
              w={"330px"}
              bgSize={"contain"}
              className="divA"
              pos={"relative"}
              overflow={"hidden"}
            >
              <Box
                pos={"absolute"}
                w={"80%"}
                h={"100px"}
                className="divB"
                bgColor={"white"}
                left={0}
                right={0}
                margin="auto"
                textAlign={"left"}
                bottom={-100}
                py={5}
                px={3}
              >
                <Text color={"blue"}>{data.title}</Text>
                <Text fontSize={"xl"} fontWeight={700}>
                  {data.name}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;
