import GameGrid from '@/components/components/GameGrid/GameGrid';
import GameHeading from '@/components/components/GameHeading/GameHeading';
import GenreList from '@/components/components/Genre/GenreList';
import PlatformSelector from '@/components/components/Selector/PlatformSelector';
import SortSelector from '@/components/components/Selector/SortSelector';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `
      "main"
    `,
        lg: `
      "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem gridArea="aside" p={2}>
        <GenreList />
      </GridItem>
      <GridItem gridArea="main">
        <Box>
          <GameHeading />
          <Flex gap={3} marginBottom={4} justifyContent="flex-end">
            <Box marginRight={1}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage