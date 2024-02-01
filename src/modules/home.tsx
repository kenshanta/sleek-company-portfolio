import "../App.css";
import { Grid, Text, GridItem } from "@chakra-ui/react";
import AppHeader from "../components/header";
import AppFooter from "../components/footer";
import AppBody from "../components/body";

export default function HomePage() {
  return (
    <Grid className="App" gap={9}>
      <AppHeader />
      <AppBody />
      {/* TODO: keep gridItem in parent component (here like so) instead of child */}
      <GridItem>
        <AppFooter />
      </GridItem>
    </Grid>
  );
}
