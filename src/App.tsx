import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/nav-bar";
import GameGrid from "./components/game-grid";
import GenreList from "./components/genre-list";

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
            <GenreList />
          </GridItem>
        </Show>
        <GridItem
          area="main"
          // bg="dodgerblue"
        >
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
