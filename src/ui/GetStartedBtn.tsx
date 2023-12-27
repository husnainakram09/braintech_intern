import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {}

const GetStartedBtn: React.FC<Props> = ({}) => {
  return (
    <Button
      borderRadius={50}
      p={"30px 40px"}
      bgImage={"linear-gradient(220deg, #F27C1E 0%, #DD4C23 79%)"}
      color={"white"}
      _hover={{
        bgImage: "linear-gradient(180deg, #DD4C23 19%, #F27C1E 100%)",
      }}
    >
      Get Started
    </Button>
  );
};

export default GetStartedBtn;
