import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "./hooks/use-genre";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <List.Root>
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="8px" display="block">
            <HStack>
              <Image
                boxSize="40px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
