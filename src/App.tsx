import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/components/NavBar/NavBar";
import GameGrid from "./components/components/GameGrid/GameGrid";
import GenreList from "./components/components/Genre/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/components/Selector/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/components/Selector/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Box maxW="1400px" mx="auto" px={4}>
      <Grid
        templateAreas={{
          base: `
      "nav"
      "main"
    `,
          lg: `
      "nav nav"
      "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem gridArea="nav">
          <NavBar />
        </GridItem>
        <GridItem gridArea="aside">
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
        <GridItem gridArea="main">
          <HStack gap={3} marginBottom={2}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
