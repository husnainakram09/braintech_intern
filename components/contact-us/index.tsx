import MyInput from "@/src/ui/MyInput";
import MyTextArea from "@/src/ui/MyTextArea";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

interface Props {}

const ContactUs: React.FC<Props> = ({}) => {
  return (
    <>
      <Box id="contact" px={10} py={100}>
        <Grid className="contact-us" gap={20} gridTemplateColumns={"40% 55%"}>
          <GridItem
            bgImage={"linear-gradient(250deg, #4E95ED 0%, #03228F 100%)"}
            borderRadius={10}
            px={10}
            py={20}
          >
            <Box>
              <Text color={"white"}>LET&apos;S TALK</Text>
              <Text fontSize={"4xl"} fontWeight={700} mt={5} color={"white"}>
                Speak With Expert Engineers.
              </Text>
            </Box>

            <Stack mt={5}>
              <Flex align={"center"} gap={3}>
                <Box borderRadius={"100%"} bgColor={"white"} p={4}>
                  <IoHomeSharp style={{ color: "#03228F" }} />
                </Box>
                <Stack gap={0}>
                  <Text color={"white"} as="b">
                    Email:
                  </Text>
                  <Text color={"white"}>{"(+088)589-8745"}</Text>
                </Stack>
              </Flex>
            </Stack>

            <Stack mt={5}>
              <Flex align={"center"} gap={3}>
                <Box borderRadius={"100%"} bgColor={"white"} p={4}>
                  <FaPhoneAlt style={{ color: "#03228F" }} />
                </Box>
                <Stack gap={0}>
                  <Text color={"white"} as="b">
                    Phone:
                  </Text>
                  <Text color={"white"}>support@rstheme.com</Text>
                </Stack>
              </Flex>
            </Stack>

            <Stack mt={5}>
              <Flex align={"center"} gap={3}>
                <Box borderRadius={"100%"} bgColor={"white"} p={4}>
                  <MdLocationPin style={{ color: "#03228F" }} />
                </Box>
                <Stack gap={0}>
                  <Text color={"white"} as="b">
                    Address:
                  </Text>
                  <Text color={"white"}>New Jesrsy, 1201, USA</Text>
                </Stack>
              </Flex>
            </Stack>
          </GridItem>
          <GridItem pr={"50px"}>
            <Box>
              <Text color={"blue"}>GET IN TOUCH</Text>
              <Text fontSize={"4xl"} fontWeight={700} mt={5}>
                Fill the Form Below{" "}
              </Text>
            </Box>
            <Box mt={10}>
              <Flex wrap={"wrap"} gap={5}>
                <Box flex={"45%"}>
                  <MyInput placeholder="Name" />
                </Box>
                <Box flex={"45%"}>
                  <MyInput placeholder="Email" type="email" />
                </Box>
                <Box flex={"45%"}>
                  <MyInput placeholder="Number" type="tel" />
                </Box>
                <Box flex={"45%"}>
                  <MyInput placeholder="Your Website" />
                </Box>
                <Box flex={1}>
                  <MyTextArea placeholder="Message" />
                </Box>
              </Flex>

              <Button
                bgImage={"linear-gradient(80deg, #03228F 0%, #4E95ED 100%)"}
                py={7}
                px={10}
                color={"white"}
                borderRadius={30}
                mt={10}
              >
                Submit Now
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18146.47307316482!2d101.68739521886964!3d3.167447504679998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d12d669c1f%3A0x9e3afdd17c8a9056!2sPetronas%20Twin%20Towers!5e0!3m2!1sen!2smy!4v1703685967525!5m2!1sen!2smy"
        width="100%"
        height="460"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default ContactUs;
