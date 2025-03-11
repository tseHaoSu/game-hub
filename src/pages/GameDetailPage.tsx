import useGame from "@/hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailPage = () => {
  const { slug } = useParams();
  const {data: game, isLoading, error} = useGame(slug!);

  if(error) throw error;
  if(isLoading) return <Spinner />;
  return <>
  <Heading>{game?.name}</Heading>
  <Text>{game?.description_raw}</Text>
  </>
  ;
};

export default GameDetailPage;
