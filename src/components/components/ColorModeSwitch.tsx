import { useColorMode } from "@/components/ui/color-mode";
import { HStack, Switch, Icon } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa6";

const ColorModeSwitch = () => {
  const { toggleColorMode} = useColorMode();
  return (
    <HStack>
      <Switch.Root onChange={toggleColorMode} colorPalette="green">
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
          <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
            <Icon as={FaSun} color="yellow.400" />
          </Switch.Indicator>
        </Switch.Control>
        <Switch.Label>
        </Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
