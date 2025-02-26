import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/components/NavBar";
import GameGrid from "./components/components/GameGrid/GameGrid";
import GenreList from "./components/components/Genre/GenreList";
function App() {
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
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <GridItem gridArea="aside">
        <GenreList />
      </GridItem>
      <GridItem gridArea="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
