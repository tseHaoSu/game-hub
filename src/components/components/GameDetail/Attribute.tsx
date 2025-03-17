import { Heading, VStack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const Attribute = ({ term, children }: Props) => {
  return (
    <VStack align="start">
      <Heading size="xl" color="gray.500" >
        {term}
      </Heading>
      <Text>{children}</Text>
    </VStack>
  );
};

export default Attribute;
