import "../App.css";
import React from "react";
import { Grid, useDisclosure } from "@chakra-ui/react";
import AppHeader from "../components/header";
import AppFooter from "../components/footer";
import AppBody from "../components/body";
import HamburgerDrawer from "../components/hamburgerDrawer";
import "../i18n";
export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Grid className="App" gap={10}>
      <HamburgerDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      <AppHeader btnRef={btnRef} onOpen={onOpen} clicked={() => onOpen()} />
      <AppBody />
      <AppFooter />
    </Grid>
  );
}
