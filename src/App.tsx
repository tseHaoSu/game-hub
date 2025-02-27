import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/components/NavBar/NavBar";
import GameGrid from "./components/components/GameGrid/GameGrid";
import GenreList from "./components/components/Genre/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
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
      gap={4}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <GridItem gridArea="aside">
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
      <GridItem gridArea="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
