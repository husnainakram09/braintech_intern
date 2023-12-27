import { Stack, Flex, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface Props {
  category: string;
  date: string;
  user: string;
  title: string;
  link: string;
  description: string;
}

const BlogCard: React.FC<Props> = ({
  category,
  date,
  user,
  title,
  link,
  description,
}) => {
  return (
    <Stack
      h={500}
      w={360}
      p={5}
      bgColor={"white"}
      borderRadius={5}
      boxShadow={"0 0 10px #00000010"}
      _hover={{
        transform: "translateY(-20px)",
        transition: "transform 0.6s ease",
      }}
    >
      <Box
        flex={1}
        bgImage={"url(/images/blog_3.jpg)"}
        bgRepeat={'no-repeat'}
        bgSize={"cover"}
        borderRadius={5}
        pos={"relative"}
      >
        <Box
          pos={"absolute"}
          color={"white"}
          bgImage={
            "linear-gradient(to right,#03228f 0%,#03228f 0%,#03228f 26%,#4e95ed 100%,#2989d8 100%,#207cca 100%,#0b70e1 100%)"
          }
          py={2}
          px={5}
          borderRadius={40}
          bottom={5}
          right={5}
        >
          {category}
        </Box>
      </Box>
      <Box flex={1} textAlign={"left"}>
        <Flex align={"center"} columnGap={10}>
          <Flex align={"center"} columnGap={2}>
            <FaRegCalendarCheck />
            {date}
          </Flex>
          <Flex align={"center"} columnGap={2}>
            <IoPerson /> {user}
          </Flex>
        </Flex>
        <Link href={link || "#"}>
          <Text fontWeight={600} fontSize={"2xl"} mt={5} noOfLines={2}>
            {title}
          </Text>
        </Link>
        <Text color={"gray"} my={5}>
          {description}
        </Text>
        <Link href={"#"}>
          <Flex align={"center"} fontWeight={700}>
            Learn More <MdOutlineKeyboardArrowRight />
          </Flex>
        </Link>
      </Box>
    </Stack>
  );
};

export default BlogCard;
