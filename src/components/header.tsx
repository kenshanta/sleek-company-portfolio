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
  // TODO: test why Button onClick wont fire up log that isnt logging in console
  // const tes = () => {
  //   console.log("cicked");
  //   onOpen();
  // };
  return (
    <>
      <Grid className="App-header">
        <Grid templateColumns="repeat(2, 1fr)" paddingX={"6"} paddingTop={"9"}>
          <GridItem>
            <img src={BrandLogo} className="App-logo" alt="logo" />
          </GridItem>
          <GridItem colEnd={6}>
            {/* <Button
              variant={"none"}
              // ref={btnRef}

              onClick={clicked}
              padding={0}
            > */}
            <img src={Hamburger} className="hamburger-logo" alt="hamburger" />
            {/* </Button> */}
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
              Teamwork&nbsp;
            </Text>
            <Box
              id="secondDiv"
              justifyContent={"start"}
              display={"flex"}
              flexDirection={"row"}
            >
              <Text fontSize="2xl" id="spanInDiv">
                makes <b>everyone</b>&nbsp;
              </Text>
              <Text fontSize={"2xl"} id="spanInDivSec">
                succeed
              </Text>
            </Box>
          </GridItem>
        </GridItem>
      </Grid>
    </>
  );
};

export default AppHeader;
