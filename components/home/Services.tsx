import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ServicesData from "@/constants/services.json";
interface Props {}

const Services: React.FC<Props> = ({}) => {
  return (
    <Box p={20}>
      <Box maxW={"500px"} m={"auto"}>
        <Text color={"#F27C1E"} as={"b"}>
          WE ARE BEST
        </Text>
        <Text fontSize={"4xl"} fontWeight={700}>
          Why Choose Braintech
        </Text>
      </Box>
      <Flex wrap={"wrap"} gap={10} mt={10} justify={"center"}>
        {ServicesData.map((service: any, key: any) => (
          <Box
            width={["100%", "100%", "340px"]}
            height={"340px"}
            className="flip-card"
            key={key}
            borderRadius={10}
          >
            <Stack
              h={"100%"}
              w={"100%"}
              className="flip-card-front"
              p={10}
              justify={"center"}
              align={"center"}
              bgImage={`url(${service.image})`}
              gap={5}
              borderRadius={10}
            >
              <Image src={service.icon} width={"60px"} />
              <Text fontSize={"2xl"} fontWeight={700}>
                {service.title}
              </Text>
              <Text as={"p"}>{service.description}</Text>
            </Stack>
            <Stack
              bgColor={"gray"}
              h={"100%"}
              w={"100%"}
              p={10}
              className="flip-card-back"
              align={"center"}
              justify={"center"}
              bgImage={service.bgColor}
              borderRadius={10}
            >
              <Text fontSize={"2xl"} fontWeight={700}>
                {service.title}
              </Text>
              <Text as={"p"}>{service.description}</Text>
              <Button borderRadius={50} px={5}>
                View More
              </Button>
            </Stack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Services;
