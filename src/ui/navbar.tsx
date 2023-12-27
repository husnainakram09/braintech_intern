"use client";

import {
  Box,
  Button,
  Container,
  Drawer,
  HStack,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Navlinks from "@/constants/navlinks.json";
import { IoIosSearch } from "react-icons/io";
import MyDrawer from "./MyDrawer";

interface Props {}

const Navbar: React.FC<Props> = ({}) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //
  return (
    <Box
      p={"20px 30px"}
      w={"100%"}
      m={"auto"}
      pos={scrollY > 500 ? "fixed" : "static"}
      top={0}
      bgColor={"white"}
      zIndex={10}
      boxShadow={scrollY > 500 ? "0 0 15px #cbcbcb" : ""}
    >
      <HStack justify={"space-between"}>
        <Image src={"/images/logo_dark.png"} alt={"log"} w={200} />
        <HStack gap={10}>
          {Navlinks.map((link: any, key: any) => {
            return (
              <Link href={link.href} key={key}>
                <Text>{link.title}</Text>
              </Link>
            );
          })}
          <Box>
            <IoIosSearch style={{ fontSize: "24px" }} />
          </Box>
          <Box>
            <MyDrawer
              children={<>hello</>}
              btn={<Image src="/images/menu.png" w={8} cursor={"pointer"} />}
            />
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
