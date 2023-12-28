"use client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Carousel from "react-multi-carousel";
import { ResponsiveType } from "react-multi-carousel/lib/types";

interface Props {}
const responsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 1400, min: 1201 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 991, min: 769 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};
const Team: React.FC<Props> = ({}) => {
  const teamData = [
    {
      name: "Pull Maradona",
      role: "President & CEO",
      img: "/images/team_5.jpg",
    },
    {
      name: "Rohit Pande",
      role: "President & CEO",
      img: "/images/team_9.jpg",
    },
    {
      name: "Makhaia Antitni",
      role: "President & CEO",
      img: "/images/team_6.jpg",
    },
  ];
  return (
    <Box id="team" px={10} py={100} bgColor={"#F6F7F9"} textAlign={"center"}>
      <Text color={"blue"}>Team</Text>
      <Text fontSize={"4xl"} fontWeight={700} mt={5}>
        Expert IT Consultants
      </Text>
      <Carousel ssr arrows={false} showDots infinite responsive={responsive}>
        {teamData.map((member, key) => (
          <Box
            w={["100%", "max-content", "max-content"]}
            py={20}
            key={key}
            m={2}
          >
            <Box
              h={"350px"}
              w={"350px"}
              bgImage={"url(/images/ngbng.png)"}
              bgSize={"contain"}
              bgRepeat={"no-repeat"}
              p={7}
            >
              <Image alt="img" src={member.img} borderRadius={"100%"} />
            </Box>
            <Text fontSize={"2xl"} fontWeight={700} mt={2}>
              {member.name}{" "}
            </Text>
            <Text mt={2}>{member.role}</Text>
            <Flex justify={"center"} columnGap={5} mt={5}>
              <Link href={"#"}>
                <FaFacebookF />
              </Link>
              <Link href={"#"}>
                <FaInstagram />
              </Link>
              <Link href={"#"}>
                <FaTwitter />
              </Link>
              <Link href={"#"}>
                <FaLinkedin />
              </Link>
            </Flex>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Team;
