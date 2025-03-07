import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const filteredPlatformsIds = [12, 13];
  const filteredPlatforms = data?.results.filter(
    (platform) => !filteredPlatformsIds.includes(platform.id)
  );
  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platform"} <FaChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {filteredPlatforms?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
            value={platform.id.toString()}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
