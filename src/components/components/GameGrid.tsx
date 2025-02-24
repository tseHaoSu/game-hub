import apiClient from "@/services/api-client";
import { useState, useEffect } from "react";
import { Text, List } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        console.log(res.data.results);
        setGames(res.data.results)
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <List.Root>
        {games.map((game) => (
          <List.Item key={game.id}>{game.name}</List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GameGrid;
