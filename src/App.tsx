import "./App.css";
import { Grid, Text, GridItem } from "@chakra-ui/react";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
export default function App() {
  return (
    <Grid className="App" gap={9}>
      <AppHeader />
      <GridItem background={"white"}>
        <Text fontSize="4xl">So this is the body for Work2Gether</Text>
      </GridItem>
      <GridItem>
        <AppFooter />
      </GridItem>
    </Grid>
  );
}
