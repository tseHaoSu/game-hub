import Attribute from "@/components/components/GameDetail/Attribute";
import Expandable from "@/components/components/GameDetail/Expandable";
import useGame from "@/hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); //non-null assertion operator used for possible undefined

  if (error) throw error;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <Expandable>{game?.description_raw || ""}</Expandable>
      <SimpleGrid columns={2} gap="40px" p={4} maxWidth="50%">
        <Attribute term="Platforms">
          {game?.parent_platforms.map(({ platform }) => (
            <Text>{platform.name}</Text>
          ))}
        </Attribute>
        <Attribute term="MetaScore">
          <Text>{game?.metacritic}</Text>
        </Attribute>
        <Attribute term="Genres">
          {game?.genres.map((genre) => (
            <Text>{genre.name}</Text>
          ))}
        </Attribute>
        <Attribute term="publishers">
          {game?.genres.map((genre) => (
            <Text>{genre.name}</Text>
          ))}
        </Attribute>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
