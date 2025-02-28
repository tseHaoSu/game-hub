import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100", // Default light mode background
        color: "gray.900",
      },
    },
  },
});

export default theme;
