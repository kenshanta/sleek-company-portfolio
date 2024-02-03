import "../App.css";
import { Grid } from "@chakra-ui/react";
import AppHeader from "../components/header";
import AppFooter from "../components/footer";
import AppBody from "../components/body";

export default function HomePage() {
  return (
    <Grid className="App" gap={9}>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </Grid>
  );
}
