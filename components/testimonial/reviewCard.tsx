import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const ReviewCard: React.FC<Props> = ({}) => {
  return (
    <Box bgColor={"white"} w={'100%'} borderRadius={10} p={10} pb={20} pos={"relative"}>
      <Image alt="img" src="/images/quote2.png" />
      <Text>
        Capitalize on low hanging fruit to identify a ballpark value added
        activity to beta test. Override the digital divide with additional
        clickthroughs from DevOps. Nanotechnology immersion along the
        information highway.
      </Text>
      <Flex
        pos={"absolute"}
        bottom={-10}
        left={0}
        align={"center"}
        columnGap={5}
      >
        <Image alt="img" src="/images/test5.png" borderRadius={"50%"} w={"80px"} />
        <Box>
          <Text as={"b"} fontSize={"2xl"}>
            Abdur Rashid
          </Text>
          <Text color={"gray"}>CEO, Keen IT Solution</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ReviewCard;
