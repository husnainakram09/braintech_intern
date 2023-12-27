import { Box, Input } from "@chakra-ui/react";
import React from "react";

interface Props {
  placeholder: string;
  type?: string;
}

const MyInput: React.FC<Props> = ({ placeholder, type = "text" }) => {
  return (
    <Input
      placeholder={placeholder}
      h={50}
      background={"#e0e2e5"}
      border={"none"}
      type={type}
    />
  );
};

export default MyInput;
