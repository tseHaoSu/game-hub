import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={20}
      overflow="hidden"
      boxShadow="xl"
      width="100%"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.02)" }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
