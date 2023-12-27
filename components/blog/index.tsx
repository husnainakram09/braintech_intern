import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import BlogCard from "./BlogCard";

interface Props {}

const Blog: React.FC<Props> = ({}) => {
  return (
    <Box id="blog" px={10} py={100} bgColor={"#f6f7f982"} textAlign={"center"}>
      <Box maxW="500px" m={"auto"}>
        <Text color={"blue"}>BLOG</Text>
        <Text fontWeight={700} fontSize={"3xl"}>
          Latest Tips & Tricks
        </Text>
        <Text color={"gray"}>
          We've been building creative tools together for over a decade and have
          a deep appreciation for software applications
        </Text>
      </Box>
      <Flex wrap={"wrap"} justify={"center"} gap={10} mt={10}>
        <BlogCard
          category={"IT Services"}
          date={"3 Apr 2023"}
          user={"admin"}
          title={"Tech Products That Makes Its Easier to Stay at Home"}
          link={""}
          description={
            "We denounce with righteous indige nation and dislike men who are so beguiled..."
          }
        />
        <BlogCard
          category={"Web Development"}
          date={"24 Mar 2023"}
          user={"admin"}
          title={"Open Source Job Report Show More Openings Fewer"}
          link={""}
          description={
            "We denounce with righteous indige nation and dislike men who are so beguiled..."
          }
        />
        <BlogCard
          category={"Artificial Intelligent"}
          date={"16 Nov 2023"}
          user={"admin"}
          title={"Types of Social Proof What its Makes Them Effective"}
          link={""}
          description={
            "We denounce with righteous indige nation and dislike men who are so beguiled..."
          }
        />
      </Flex>
    </Box>
  );
};

export default Blog;
