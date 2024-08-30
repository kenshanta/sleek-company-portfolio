import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import AppFooter from "./components/footer";
export default function App() {
  return (
    <Grid className="App" gap={5}>
      <GridItem background={"white"}></GridItem>
      <GridItem>
        <AppFooter />
      </GridItem>
    </Grid>
  );
}
