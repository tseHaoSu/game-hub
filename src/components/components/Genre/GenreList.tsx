import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store/store";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSlectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading marginBottom={3}>Genre</Heading>
      <List.Root listStyle="none" gap={2}>
        {data?.results.map((genre: Genre) => (
          <List.Item key={genre.id}>
            <HStack>
              <Image
                boxSize="40px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => setSlectedGenreId(genre.id)}
                variant="ghost"
                fontSize={"md"}
                fontWeight={genre.id == selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
