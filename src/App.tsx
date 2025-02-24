import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/components/NavBar";

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
      <GridItem
        gridArea="aside"
        bg="gold"
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>
      <GridItem gridArea="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
