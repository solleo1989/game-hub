import {
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "./hooks/use-genre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="3xl" marginY={4} marginLeft={4} textAlign="left">
        Genres
      </Heading>
      <List.Root>
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="8px" display="block">
            <HStack>
              <ButtonGroup>
                <Button
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  variant="ghost"
                  whiteSpace="normal"
                  textAlign="left"
                  wordBreak="break-word"
                >
                  <Image
                    boxSize="40px"
                    borderRadius={8}
                    objectFit="cover"
                    src={getCroppedImageUrl(genre.image_background)}
                  />
                  <Text>{genre.name}</Text>
                </Button>
              </ButtonGroup>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
