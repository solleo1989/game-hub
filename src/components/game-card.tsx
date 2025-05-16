import { type Game } from "./hooks/use-games";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./platform-icon-list";
import CriticScore from "./critic-score";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root>
        <Image src={getCroppedImageUrl(game.background_image, true)} />
        <Card.Body>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
