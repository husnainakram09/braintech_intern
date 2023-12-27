import { Textarea } from "@chakra-ui/react";
import React from "react";

interface Props {
  placeholder: string;
}

const MyTextArea: React.FC<Props> = ({ placeholder }) => {
  return (
    <Textarea
      placeholder={placeholder}
      background={"#e0e2e5"}
      border={"none"}
    />
  );
};

export default MyTextArea;
