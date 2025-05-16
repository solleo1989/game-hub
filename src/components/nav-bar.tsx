import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeToggle from "./color-mode-toggle";
import SearchInput from "./search-input";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" fit="contain"></Image>
      <SearchInput />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
