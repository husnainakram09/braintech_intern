import { Box, Flex, Stack, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {}

const serviceData = [
  {
    image: "/images/graph-2.png",
    title: "Data Analytics",
    description:
      "At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.",
    color: "#F072D6",
  },
  {
    image: "/images/machine-learning.png",
    title: "Machine Learning",
    description:
      "At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.",
    color: "#4790F2",
  },
  {
    image: "/images/artificial-intelligence.png",
    title: "Artificial Intelligence",
    description:
      "At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.",
    color: "#67C565",
  },
  {
    image: "/images/data-science.png",
    title: "Data Science",
    description:
      "At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.",
    color: "#626FF3",
  },
  {
    image: "/images/smartphone.png",
    title: "Mobile App Development",
    description:
      "At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.",
    color: "#4CCBE6",
  },
  {
    image: "/images/cloud-server.png",
    title: "IOT Integration",
    description:
      "At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.",
    color: "#E65599",
  },
];

const Services: React.FC<Props> = ({}) => {
  return (
    <Box
      px={10}
      py={100}
      bgColor={"#f6f7f982"}
      textAlign={"center"}
      id="services"
    >
      <Text color={"#F27C1E"} as={"b"}>
        Services
      </Text>
      <Text fontWeight={700} fontSize={"4xl"}>
        Explore Our All Services We <br /> Offer to customers
      </Text>
      <Flex wrap={"wrap"} gap={5} justify={"center"}>
        {serviceData.map((data: any, key: any) => (
          <Box
            maxW={["100%", "45%", "45%", "30%"]}
            h={"365px"}
            bgColor={"white"}
            borderRadius={5}
            key={key}
            _hover={{
              bgColor: data.color,
              color: "white",
            }}
            cursor={"pointer"}
          >
            <Stack
              h={"100%"}
              w={"100%"}
              p={10}
              justify={"center"}
              align={"center"}
              gap={5}
              borderRadius={10}
            >
              <Image alt="img" src={data.image} width={"60px"} />
              <Text fontSize={"2xl"} fontWeight={700}>
                {data.title}
              </Text>
              <Text as={"p"}>{data.description}</Text>
              <Link href={"#"}>
                <Flex align={"center"} justify={"center"}>
                  Read More <MdKeyboardArrowRight />
                </Flex>
              </Link>
            </Stack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Services;
