import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
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
          />
        </GridItem>
        <GridItem gridArea="aside" p={2}>
          <GenreList
          />
        </GridItem>
        <GridItem gridArea="main">
          <Box>
            <GameHeading />
            <Flex gap={3} marginBottom={4} justifyContent="flex-end">
              <Box marginRight={1}>
                <PlatformSelector     
                />
              </Box>
              <SortSelector
                
              />
            </Flex>
          </Box>
          <GameGrid  />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
