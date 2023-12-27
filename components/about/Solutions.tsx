import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

interface Props {}

const solution = [
  { image: "/images/atom.png", title: "Software" },
  { image: "/images/fintech.png", title: "Fintech" },
  { image: "/images/medical.png", title: "Healthcare" },
  { image: "/images/diamond.png", title: "Data Mining" },
  { image: "/images/idea-3.png", title: "Machine Learning" },
  { image: "/images/virus.png", title: "Medical" },
  { image: "/images/film-reel.png", title: "Entertainment" },
  { image: "/images/strategy.png", title: "AI" },
  { image: "/images/target.png", title: "Manufacturing" },
  { image: "/images/graphic-designer.png", title: "Logistics" },
];
const Solutions: React.FC<Props> = ({}) => {
  return (
    <Box textAlign={"center"} p={"100px 60px"} bgColor={"#f6f7f982"}>
      <Box maxW={"500px"} m={"auto"}>
        <Text color={"#F27C1E"} as={"b"}>
          WORK FOR ANY INDUSTRY
        </Text>
        <Text fontWeight={700} fontSize={"4xl"}>
          Best Solutions, For All Organizations
        </Text>
      </Box>
      <Flex gap={5} justify="center" mt={10} wrap={"wrap"}>
        {solution.map((data: any, key: any) => (
          <Stack
            w={"200px"}
            h={"200px"}
            bg={"white"}
            borderRadius={5}
            key={key}
            justify={"center"}
            align={"center"}
          >
            <Image alt="img" src={data.image} w={20} />
            <Text as={"b"}>{data.title}</Text>
          </Stack>
        ))}
      </Flex>
    </Box>
  );
};

export default Solutions;
