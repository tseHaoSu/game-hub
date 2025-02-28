import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Heading, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  const excludedIds = [2, 15, 6];
  const filteredGenres = genres.filter(
    (genre) => !excludedIds.includes(genre.id)
  );
  return (
    <>
      <Heading marginBottom={3}>Genre</Heading>
      <List.Root listStyle="none" gap={2}>
        {filteredGenres.map((genre) => (
          <List.Item key={genre.id}>
            <HStack>
              <Image
                boxSize="40px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="ghost"
                fontSize={"md"}
                fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
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
