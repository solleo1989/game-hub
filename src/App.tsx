import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/nav-bar";
import GameGrid from "./components/game-grid";
import GenreList from "./components/genre-list";
import { useState } from "react";
import type { Genre } from "./components/hooks/use-genre";
import PlatformSelector from "./components/platform-selector";
import type { Platform } from "./components/hooks/use-platforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem
          area="main"
          // bg="dodgerblue"
        >
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
