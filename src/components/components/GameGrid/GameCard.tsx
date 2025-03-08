import { Game } from "@/hooks/useGames";
import { Button, Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

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
        <Card.Title mt="2">{game.name}</Card.Title>
      </Card.Body>
      <Card.Footer justifyContent={"flex-end"}>
        <HStack gap={2}>
          <Button variant="outline">View</Button>
          <Button>Join</Button>
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
