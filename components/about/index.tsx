import GetStartedBtn from "@/src/ui/GetStartedBtn";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Progress,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Solutions from "./Solutions";
import Technology from "./Technology";

interface Props {}

const services = [
  {
    title: "Software Development",
    progress: 92,
    color: "orange",
  },
  {
    title: "Cyber Security",
    progress: 80,
    color: "green",
  },
  {
    title: "Artificial Intelligence",
    progress: 95,
    color: "blue",
  },
  {
    title: "Web Development",
    progress: 78,
    color: "purple",
  },
];

const About: React.FC<Props> = ({}) => {
  return (
    <>
      <Box id="about" px={10} py={100} bgColor={"#F6F7F9"}>
        <Grid gridTemplateColumns={"repeat(2,50%)"} className="about_us">
          <GridItem pr={"50px"}>
            <Box>
              <Text>ABOUT US</Text>
              <Text fontSize={"4xl"} fontWeight={700} mt={5}>
                We Are Increasing Business <br />
                Success With Technology
              </Text>
              <Text mt={5}>
                Over 25 years working in IT services developing software
                applications and mobile apps for clients all over the world.
              </Text>
            </Box>
            {services.map((service: any, key: any) => (
              <Box key={key} mt={5}>
                <HStack justify={"space-between"}>
                  <Text as="b">{service.title}</Text>
                  <Text as="b">{service.progress}%</Text>
                </HStack>
                <Progress
                  hasStripe
                  size={"sm"}
                  colorScheme={service.color}
                  value={service.progress}
                />
              </Box>
            ))}
            <Box mt={10}>
              <GetStartedBtn />
            </Box>
          </GridItem>
          <GridItem w={"100%"}>
            <Image src="/images/about.png" objectFit={"contain"} mt={10}/>
          </GridItem>
        </Grid>
      </Box>
      <Solutions />
      <Technology />
    </>
  );
};

export default About;
