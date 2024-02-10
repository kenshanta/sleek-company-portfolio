import "../App.css";
import React from "react";
import { Grid, useDisclosure } from "@chakra-ui/react";
import AppHeader from "../components/header";
import AppFooter from "../components/footer";
import AppBody from "../components/body";
import HamburgerDrawer from "../components/hamburgerDrawer";
export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  // TODO: Clean up after testing click issue
  const clicked = () => {
    console.log("clicked");
  };
  return (
    <Grid className="App" gap={9}>
      <HamburgerDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      <AppHeader btnRef={btnRef} onOpen={onOpen} clicked={clicked} />
      <AppBody isOpen={isOpen} btnRef={btnRef} onClose={onClose} />
      <AppFooter />
    </Grid>
  );
}
