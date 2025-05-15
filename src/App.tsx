import React from "react";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // > 1024px
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
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
      <Button colorScheme="red">Button</Button>
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
