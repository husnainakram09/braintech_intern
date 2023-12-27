import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaPhoneVolume,
  FaPhoneAlt,
} from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <Box
      bgImage={"/images/footer-bg.png"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      backgroundPosition={"center"}
    >
      <Flex
        p={20}
        bgImage={"linear-gradient(150deg, #03228F 46%, #0E73E4 100%)"}
        align={"center"}
      >
        <Box flex={1}>
          <Image alt="img" src="/images/partner-1-1.png" />
        </Box>
        <Box flex={1}>
          <Image alt="img" src="/images/partner-2-1.png" />
        </Box>
        <Box flex={1}>
          <Image alt="img" src="/images/partner-3-1.png" />
        </Box>
        <Box flex={1}>
          <Image alt="img" src="/images/logo_4-1.png" />
        </Box>
        <Box flex={1}>
          <Image alt="img" src="/images/logo_5-1.png" />
        </Box>
      </Flex>
      <Grid
        className="footer"
        rowGap={10}
        gridTemplateColumns={"repeat(4,25%)"}
        p={20}
      >
        <GridItem px={5}>
          <Image alt="img" src="/images/logo_dark.png" w={"200px"} />
          <Text mt={5}>
            We are a team of creative thinkers who are the expert of their
            industry. The growth of customers is our prime motto. We are
            determined to deliver them quality work and encourage them to work
            and grow in this competitive business world.
          </Text>
          <Flex justify={"flex-start"} columnGap={5} mt={5}>
            <Link href={"#"}>
              <Box
                borderRadius={"100%"}
                p={2}
                backgroundColor={"white"}
                _hover={{ backgroundColor: "blue" }}
              >
                <FaFacebookF />
              </Box>
            </Link>
            <Link href={"#"}>
              <Box
                borderRadius={"100%"}
                p={2}
                backgroundColor={"white"}
                _hover={{ backgroundColor: "blue" }}
              >
                <FaTwitter />
              </Box>
            </Link>
            <Link href={"#"}>
              <Box
                borderRadius={"100%"}
                p={2}
                backgroundColor={"white"}
                _hover={{ backgroundColor: "blue" }}
              >
                <FaPinterestP />
              </Box>
            </Link>
            <Link href={"#"}>
              <Box
                borderRadius={"100%"}
                p={2}
                backgroundColor={"white"}
                _hover={{ backgroundColor: "blue" }}
              >
                <FaInstagram />
              </Box>
            </Link>
          </Flex>
        </GridItem>

        <GridItem px={5}>
          <Text fontWeight={700} fontSize={"2xl"}>
            IT Services
          </Text>
          <Stack mt={5} rowGap={4}>
            {[
              "Software Development",
              "Web Development",
              "Analytic Solutions",
              "Cloud and DevOps",
              "Product Design",
            ].map((link: string, key: any) => (
              <Link href="#" color="gray" _hover={{ color: "blue" }} key={key}>
                {link}
              </Link>
            ))}
          </Stack>
        </GridItem>

        <GridItem px={5}>
          <Text fontWeight={700} fontSize={"2xl"}>
            Contact Info
          </Text>
          <Stack rowGap={4} mt={5}>
            <Flex columnGap={5} align={"center"}>
              <CiLocationOn style={{ fontSize: 28, color: "#0B70E1" }} />
              <Text>374 FA Tower, William S Blvd 2721, IL, USA</Text>
            </Flex>
            <Flex columnGap={5} align={"center"}>
              <MdOutlineLocalPhone style={{ fontSize: 20, color: "#0B70E1" }} />
              <Text>{"(+880)155 69569 365"}</Text>
            </Flex>
            <Flex columnGap={5} align={"center"}>
              <CiMail style={{ fontSize: 20, color: "#0B70E1" }} />
              <Text>support@rstheme.com</Text>
            </Flex>
            <Flex columnGap={5} align={"center"}>
              <GoClock style={{ fontSize: 20, color: "#0B70E1" }} />
              <Text>Opening Hours: 10:00 - 18:00</Text>
            </Flex>
          </Stack>
        </GridItem>

        <GridItem px={5}>
          <Text fontWeight={700} fontSize={"2xl"}>
            Newsletter
          </Text>
          <Text color={"gray"} mt={5}>
            Subscribe to Our Newsletter for Daily News and Updates
          </Text>
          <InputGroup mt={5}>
            <Input
              placeholder="Your email address"
              bgColor={"white"}
              borderRadius={40}
              h={"60px"}
            />
            <InputRightElement
              h={"60px"}
              w={"60px"}
              bgImage={"linear-gradient(90deg,#03228f 0%,#0e73e4 100%)"}
              borderRadius={"100%"}
            >
              <IoIosSend style={{ color: "white", fontSize: 24 }} />
            </InputRightElement>
          </InputGroup>
        </GridItem>
      </Grid>
      <Flex
        className="sub-footer"
        justify={"space-between"}
        p={5}
        bgColor="#ffffff69"
        textAlign={"center"}
      >
        <Text color={"gray"}>
          © 2023 All Rights Reserved. Design & Developed By RSTheme
        </Text>
        <Flex gap={5} justify={"center"} align={"center"}>
          {["Home", "About", "Blog", "Shop", "FAQs"].map(
            (link: any, key: any) => (
              <React.Fragment key={key}>
                {key != 0 && (
                  <Box
                    p={"3px"}
                    borderRadius={"100%"}
                    bgImage={"linear-gradient(90deg, #03228f 0%, #0e73e4 100%)"}
                  ></Box>
                )}
                <Link href={`#${link}`}>{link}</Link>
              </React.Fragment>
            )
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
