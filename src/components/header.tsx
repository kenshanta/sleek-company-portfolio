import {
  Grid,
  GridItem,
  Menu,
  MenuButton,
  Text,
  IconButton,
  Box,
} from "@chakra-ui/react";
import logo from "../mockLogo.svg";
import { ReactComponent as Hamburger } from "../hamburgerMock.svg";

export default function AppHeader() {
  return (
    <Grid className="App-header">
      <Grid templateColumns="repeat(2, 1fr)" paddingX={"9"} paddingTop={"9"}>
        <GridItem>
          <img src={logo} className="App-logo" alt="logo" />
        </GridItem>
        <GridItem colEnd={6}>
          {/* <Menu>
            <MenuButton
              as={IconButton}
              icon={<Hamburger />}
              outline={"none"}
              background={"none"}
            />
          </Menu> */}
          <Box className="hamburger-logo">
            <Hamburger />
          </Box>
        </GridItem>
      </Grid>
      <GridItem>
        <GridItem>
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
              Work/2Gether
            </text>
          </svg>
        </GridItem>
        <GridItem
          justifyContent={"center"}
          display={"flex"}
          flexDirection={"row"}
        >
          <Text fontSize="2xl" id="firstDiv">
            Logistics&nbsp;
          </Text>
          <Box id="secondDiv">
            <Text fontSize="2xl" id="spanInDiv">
              for <b>everyone</b>
            </Text>
          </Box>
        </GridItem>
      </GridItem>
    </Grid>
  );
}
