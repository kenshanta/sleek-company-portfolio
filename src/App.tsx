import React from "react";
import logo from "./mockLogo.svg";
import "./App.css";
import {
  Menu,
  MenuButton,
  IconButton,
  Grid,
  Text,
  GridItem,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid templateColumns="repeat(2, 1fr)" gap="5">
          <GridItem>
            <img src={logo} className="App-logo" alt="logo" />
          </GridItem>
          <GridItem colEnd={6}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<RxHamburgerMenu />}
                outline={"none"}
              />
            </Menu>
          </GridItem>
        </Grid>
        <Text fontSize="6xl">D.R.M.S</Text>
        <p>Where Service Meets Logistics</p>
      </header>
    </div>
  );
}
