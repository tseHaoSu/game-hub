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
    <Card.Root borderRadius={20} overflow="hidden" boxShadow="xl">
      <Image src={getCroppedImageUrl(game.background_image)} height="200px" />
      <Card.Body>
        <Card.Title mt="2">{game.name}</Card.Title>
        <HStack justifyContent={"space-between"} flexWrap={"wrap"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
      <Card.Footer justifyContent={"flex-end"}>
        <Button variant="outline">View</Button>
        <Button>Join</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
