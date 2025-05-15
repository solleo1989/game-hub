import React from "react";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/nav-bar";
import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "./components/ui/color-mode";
import GameGrid from "./components/game-grid";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // > 1024px
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show when="lg">
          <GridItem
            area="aside"
            //bg="gold"
            display={{ base: "none", lg: "block" }}
          >
            Aside
          </GridItem>
        </Show>
        <GridItem
          area="main"
          // bg="dodgerblue"
        >
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>

      <Button colorPalette="red">Button</Button>
      <Button colorPalette="blue" variant="outline">
        Button
      </Button>
      <Button colorPalette="green" variant="surface">
        Button
      </Button>
      <Button colorPalette="yellow" variant="subtle">
        Button
      </Button>
    </>
  );
};

export default App;
