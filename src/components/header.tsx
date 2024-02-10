import React from "react";
import { Grid, GridItem, Text, Box, Button } from "@chakra-ui/react";
import BrandLogo from "../logo-white.svg";
import Hamburger from "../hamburgerMock.svg";

interface AppHeaderProps {
  btnRef: React.RefObject<HTMLButtonElement>;
  onOpen: () => void;
  clicked: () => void;
}
const AppHeader: React.FC<AppHeaderProps> = ({ btnRef, onOpen, clicked }) => {
  return (
    <>
      <Grid className="App-header">
        <Grid
          justifyContent={"space-between"}
          flexDirection={"row"}
          templateColumns="repeat(2, 1fr)"
          paddingX={"6"}
          paddingTop={"9"}
        >
          <GridItem colStart={0}>
            <img src={BrandLogo} className="App-logo" alt="logo" />
          </GridItem>
          <GridItem colEnd={6}>
            <Button justifyContent={"start"} variant={"none"} onClick={clicked}>
              <img src={Hamburger} className="hamburger-logo" alt="hamburger" />
            </Button>
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
            <Text id="firstDiv">Teamwork&nbsp;</Text>
            <Box
              id="secondDiv"
              justifyContent={"start"}
              display={"flex"}
              flexDirection={"row"}
            >
              <Text id="spanInDiv">
                makes&nbsp;<b>everyone</b>&nbsp;
              </Text>
              <Text id="spanInDivSec">succeed</Text>
            </Box>
          </GridItem>
        </GridItem>
      </Grid>
    </>
  );
};

export default AppHeader;
