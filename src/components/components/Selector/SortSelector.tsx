import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by Relevance <FaChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="new-txt">Relevance</MenuItem>
        <MenuItem value="new-file">Date Added</MenuItem>
        <MenuItem value="new-win">Name</MenuItem>
        <MenuItem value="open-file">Release Date</MenuItem>
        <MenuItem value="export">Popularity</MenuItem>
        <MenuItem value="export">Average Rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
