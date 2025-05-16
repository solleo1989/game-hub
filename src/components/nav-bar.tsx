import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeToggle from "./color-mode-toggle";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="50px" fit="contain"></Image>
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
