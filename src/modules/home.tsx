import "../App.css";
import React from "react";
import { Grid, useDisclosure } from "@chakra-ui/react";
import AppHeader from "../components/header";
import AppFooter from "../components/footer";
import AppBody from "../components/body";
import HamburgerDrawer from "../components/hamburgerDrawer";
import "../i18n";

export default function HomePage() {
  const { isOpen, onOpen, onClose, getButtonProps } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  console.log(isOpen, getButtonProps(), "------");
  const toggleMenu = () => {
    if (isOpen) {
      return onClose();
    } else {
      return onOpen();
    }
  };
  return (
    <Grid className="App">
      <AppHeader onClose={onClose} isOpen={isOpen} onOpen={onOpen} />
      <HamburgerDrawer
        btnRef={btnRef}
        isOpen={isOpen}
        onClose={() => onClose()}
      />
      <AppBody />
      <AppFooter />
    </Grid>
  );
}
