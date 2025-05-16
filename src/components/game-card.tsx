import React from "react";
import { type Game } from "./hooks/use-games";
import { Card, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./platform-icon-list";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <Card.Body>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
