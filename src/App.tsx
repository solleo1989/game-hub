import React from "react";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";
import NavBar from "./components/NavBar";

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
            bg="gold"
            display={{ base: "none", lg: "block" }}
          >
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
      <ColorModeButton colorScheme="red">Button</ColorModeButton>
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
