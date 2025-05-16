import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeToggle from "./color-mode-toggle";
import SearchInput from "./search-input";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="70px" fit="contain"></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
