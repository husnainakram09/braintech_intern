import GetStartedBtn from "@/src/ui/GetStartedBtn";
import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaPlay } from "react-icons/fa";
import Services from "./Services";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  return (
    <>
      <Box>
        <Grid className="hero_section" alignItems={"center"}>
          <Box pr={50} pl={10} mt={[0, 0, 40]}>
            <Box>
              <Text as={"h1"} fontSize={"5xl"}>
                Business
                <br /> Intelligence & Data Analysis
              </Text>
              <Text as={"p"} fontSize={"20px"}>
                Our process that relies on methods and techniques to taking raw
                data - mining for insights and years of experience will help you
                become the industry leader.{" "}
              </Text>
            </Box>
            <Box mt={10}>
              <HStack gap={20}>
                <GetStartedBtn />
                <Box pos={"relative"}>
                  <Box className="play-btn-ring">
                    <Center
                      borderRadius={100}
                      bgImage={
                        "linear-gradient(180deg, #03228F 0%, #0B70E1 100%)"
                      }
                      h={"80px"}
                      w={"80px"}
                    >
                      <FaPlay style={{ fontSize: 16, color: "white" }} />
                    </Center>
                  </Box>
                </Box>
              </HStack>
              <Text as={"p"} fontWeight={700} color={"#717070"} mt={20}>
                Trusted By 5000+ Worldwide Customers:
              </Text>
              <HStack mt={5}>
                {[1, 2, 3, 4].map((value: any, key: any) => {
                  return (
                    <Image alt="img"
                      src={`/images/partner-${value}.png`}
                      key={key}
                      w={"120px"}
                    />
                  );
                })}
              </HStack>
            </Box>
          </Box>
          <Box w={"100%"}>
            <Image alt="img" src="/images/hero_bg.png" objectFit={"contain"} />
          </Box>
        </Grid>
      </Box>
      <Services />
    </>
  );
};

export default Home;
