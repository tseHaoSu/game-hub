import { Platform } from "@/entities/Platform";
import { HStack, Box } from "@chakra-ui/react";
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
      {platforms.map((platform) => {
        // Skip platforms that don't have a matching icon
        if (!iconMap[platform.slug]) {
          console.warn(`No icon found for platform: ${platform.slug}`);
          return null;
        }
        const IconComponent = iconMap[platform.slug];
        return (
          <Box key={platform.id}>
            <IconComponent size={20} />
          </Box>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
