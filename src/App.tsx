import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import AppFooter from "./components/footer";
export default function App() {
  return (
    <Grid className="App" gap={9}>
      <GridItem background={"white"}></GridItem>
      <GridItem>
        <AppFooter />
      </GridItem>
    </Grid>
  );
}
