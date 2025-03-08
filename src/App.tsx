import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/components/GameGrid/GameGrid";
import GameHeading from "./components/components/GameHeading/GameHeading";
import GenreList from "./components/components/Genre/GenreList";
import NavBar from "./components/components/NavBar/NavBar";
import PlatformSelector from "./components/components/Selector/PlatformSelector";
import SortSelector from "./components/components/Selector/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Box mx="auto" px={4}>
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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <GridItem gridArea="aside" p={2}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
        <GridItem gridArea="main">
          <Box>
            <GameHeading gameQuery={gameQuery} />
            <Flex gap={3} marginBottom={4} justifyContent="flex-end">
              <Box marginRight={1}>
                <PlatformSelector
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platformId: platform.id })
                  }
                  selectedPlatformId={gameQuery.platformId}
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
