import React from "react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Box, Button } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import usePlatforms from "@/hooks/usePlatforms";
import { Platform } from "@/hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Box p="3">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
             {selectedPlatform?.name || "Platform"} <FaChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {data.map((platform) => (
            <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;
