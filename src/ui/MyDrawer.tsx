import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Link,
  useDisclosure,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

interface Props {
  children: any;
  btn: any;
}

const MyDrawer: React.FC<Props> = ({ children, btn }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();

  return (
    <>
      <Button ref={btnRef} bgColor={"transparent"} p={0} onClick={onOpen}>
        {btn}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent
          bgImage={"linear-gradient(90deg,#e2e9f7 0%,#ffffff 100%)"}
        >
          <DrawerCloseButton />
          <DrawerHeader mt={10} ml={5}>
            <Image src="/images/logo_dark.png" w={"200px"} />
          </DrawerHeader>

          <DrawerBody px={10}>
            <Text mt={5}>
              Sedut perspiciatis unde omnis iste natus error sitlutem acc
              usantium doloremque laudantium totam remaperiaeaque ipsa quae ab
              illo inventore veritatis
            </Text>

            <Stack mt={10}>
              <Flex align={"center"} gap={3}>
                <Box borderRadius={"100%"} bgColor={"white"} p={4}>
                  <MdLocationPin style={{ color: "#03228F" }} />
                </Box>
                <Stack gap={0}>
                  <Text as="b">Address:</Text>
                  <Text>New Jesrsy, 1201, USA</Text>
                </Stack>
              </Flex>
            </Stack>

            <Stack mt={5}>
              <Flex align={"center"} gap={3}>
                <Box borderRadius={"100%"} bgColor={"white"} p={4}>
                  <FaPhoneAlt style={{ color: "#03228F" }} />
                </Box>
                <Stack gap={0}>
                  <Text as="b">Phone:</Text>
                  <Text>{"(+088)589-8745"}</Text>
                </Stack>
              </Flex>
            </Stack>

            <Stack mt={5}>
              <Flex align={"center"} gap={3}>
                <Box borderRadius={"100%"} bgColor={"white"} p={4}>
                  <IoMdMail style={{ color: "#03228F" }} />
                </Box>
                <Stack gap={0}>
                  <Text as="b">Email:</Text>
                  <Text>support@rstheme.com</Text>
                </Stack>
              </Flex>
            </Stack>

            <Flex justify={"flex-start"} columnGap={5} mt={10}>
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
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyDrawer;
