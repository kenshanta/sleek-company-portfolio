import {
  Grid,
  GridItem,
  Menu,
  MenuButton,
  Text,
  IconButton,
} from "@chakra-ui/react";
import logo from "../mockLogo.svg";
import { ReactComponent as Hamburger } from "../hamburgerMock.svg";

export default function AppHeader() {
  return (
    <Grid className="App-header">
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap="5"
        paddingX={"9"}
        paddingY={"9"}
      >
        <GridItem>
          <img src={logo} className="App-logo" alt="logo" />
        </GridItem>
        <GridItem colEnd={6}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<Hamburger />}
              outline={"none"}
              background={"none"}
            />
          </Menu>
        </GridItem>
      </Grid>
      <GridItem className="Header-title">
        <Text className="popart" fontSize="6xl">
          Work 2 Gether
        </Text>
        <GridItem
          justifyContent={"center"}
          display={"flex"}
          flexDirection={"row"}
        >
          <Text fontSize="larger">"Logistics for &nbsp;</Text>
          <Text fontWeight={"bold"} fontSize="larger">
            everyone"
          </Text>
        </GridItem>
      </GridItem>
    </Grid>
  );
}
