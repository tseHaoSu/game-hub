import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  if (!platforms?.length) return null;
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    linux: FaLinux,
    nintendo: SiNintendo,
    mac: FaApple,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack flexWrap="wrap" gap="10">
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} boxSize={5} key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
