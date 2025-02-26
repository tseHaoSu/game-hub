import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Demo = ({ children }: Props) => {
  return (
    <Box borderRadius={20} overflow="hidden" boxShadow="xl" width="100%">
      {children}
    </Box>
  );
};

export default Demo;
