import React from 'react'
import { Game } from "@/hooks/useGames";
import { Button, Card, Image } from '@chakra-ui/react';
import { Avatar } from "@/components/ui/avatar";

interface Props {
    game: Game;
}


const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={20} overflow="hidden">
      <Card.Header>
        <Card.Title mt="2">{game.name}</Card.Title>
      </Card.Header>
      <Card.Body maxW="">
        <Image src={game.background_image} />
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
        <Button>Join</Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default GameCard