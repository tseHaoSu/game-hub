import logo from "@/assets/GameHubResources/Logo/logo.webp";
import { HStack, Image } from "@chakra-ui/react";
import SearchInput from "../Search/SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding="1rem">
      <Image src={logo} alt="GameHub" boxSize="60px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
