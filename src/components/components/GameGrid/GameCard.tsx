import { Game } from "@/entities/Game";
import getCroppedImageUrl from "@/services/image-url";
import { Card, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root
      height="100%"
      display="flex"
      overflow="hidden"
      colorPalette="yellow"
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between" flexWrap="wrap" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title mt="2">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
