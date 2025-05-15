import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" fit="contain" margin="2px 4px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
