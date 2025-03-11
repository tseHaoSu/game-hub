import NavBar from "@/components/components/NavBar/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box p={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
