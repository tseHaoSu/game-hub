import { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform  = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return <Heading size="5xl">{heading}</Heading>;
};

export default GameHeading;
