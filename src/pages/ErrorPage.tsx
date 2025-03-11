import NavBar from "@/components/components/NavBar/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box p={4}>
        <Heading>Error</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "this page does not exist"
            : "unexpected error"}
        </Text>
      </Box>
    </>
  );
};

export default Error;
