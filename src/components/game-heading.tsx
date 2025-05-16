import type { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Games
  // Action Games (genre)
  // Xbox Games (platform)
  // Xbox genre (plat + genre)
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={10} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
