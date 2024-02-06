import "../App.css";
import React from "react";
import { Grid, useDisclosure } from "@chakra-ui/react";
import AppHeader from "../components/header";
import AppFooter from "../components/footer";
import AppBody from "../components/body";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Grid className="App" gap={9}>
      <AppHeader btnRef={btnRef} onOpen={onOpen} />
      <AppBody isOpen={isOpen} btnRef={btnRef} onClose={onClose} />
      <AppFooter />
    </Grid>
  );
}
