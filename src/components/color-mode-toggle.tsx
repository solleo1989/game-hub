import { useTheme } from "next-themes";
import { HStack, IconButton, Text } from "@chakra-ui/react";
import { LuSun, LuMoon } from "react-icons/lu";

const ColorModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <HStack>
      <IconButton aria-label="toggle color mode" onClick={toggleColorMode}>
        {theme === "light" ? <LuMoon /> : <LuSun />}
      </IconButton>
      <Text whiteSpace="nowrap">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </Text>
      {/* {<ColorModeButton />} */}
    </HStack>
  );
};

export default ColorModeToggle;
