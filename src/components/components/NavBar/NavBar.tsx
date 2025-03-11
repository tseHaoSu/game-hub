import logo from "@/assets/GameHubResources/Logo/logo.webp";
import { HStack, Image } from "@chakra-ui/react";
import SearchInput from "../Search/SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <HStack padding="1rem">
      <Link to="/">
        <Image src={logo} alt="GameHub" boxSize="60px" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
