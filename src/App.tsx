import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/nav-bar";
import GameGrid from "./components/game-grid";
import GenreList from "./components/genre-list";
import { useState } from "react";
import type { Genre } from "./components/hooks/use-genre";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // > 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show when="lg">
          <GridItem
            area="aside"
            paddingX={5}
            //bg="gold"
            display={{ base: "none", lg: "block" }}
          >
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem
          area="main"
          // bg="dodgerblue"
        >
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
