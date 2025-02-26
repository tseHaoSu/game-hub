import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres } = useGenres();
  return (
    <List.Root listStyle="none" gap={2}>
      {genres.map((genre) => (
        <List.Item key={genre.id}>
          <HStack>
            <Image
              boxSize="40px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={"md"}>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
