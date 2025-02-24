import logo from "@/assets/GameHubResources/Logo/logo.webp";
import { HStack, Image, Text, Theme } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (

      <HStack justifyContent="space-between" padding="1rem">
        <Image src={logo} alt="GameHub" boxSize="60px" />
        <Text>NavBar</Text>
        <ColorModeSwitch />
      </HStack>
  );
};

export default NavBar;
