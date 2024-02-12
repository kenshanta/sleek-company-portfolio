import React from "react";
import { Grid, GridItem, Text, Box } from "@chakra-ui/react";
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
      <Grid
        justifyContent={"space-between"}
        flexDirection={"row"}
        templateColumns="repeat(2, 1fr)"
        position="sticky"
        top="0"
        paddingX={"4"}
        paddingRight={"3"}
        paddingTop={"5"}
        backgroundColor={"black"}
        marginBottom={9}
      >
        <GridItem colStart={0}>
          <img src={BrandLogo} className="App-logo" alt="logo" />
        </GridItem>
        <GridItem
          marginBottom={9}
          display={"flex"}
          colEnd={6}
          onClick={() => clicked()}
          alignItems={"center"}
        >
          <img src={Hamburger} className="hamburger-logo" alt="hamburger" />
        </GridItem>
      </Grid>
      <GridItem marginTop={9} textColor={"white"}>
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
          <Text id="firstDiv"> We rise&nbsp;</Text>
          <Box
            id="secondDiv"
            justifyContent={"start"}
            display={"flex"}
            flexDirection={"row"}
          >
            <Text id="spanInDiv">
              <b>by lifting</b>&nbsp;
            </Text>
            <Text id="spanInDivSec">others</Text>
          </Box>
        </GridItem>
      </GridItem>
    </>
  );
};

export default AppHeader;
