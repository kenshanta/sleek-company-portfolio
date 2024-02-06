import React from "react";
import { Grid, GridItem, Text, Box, Button } from "@chakra-ui/react";
import BrandLogo from "../brandLogo.svg";
import { ReactComponent as Hamburger } from "../hamburgerMock.svg";

interface AppHeaderProps {
  btnRef: React.RefObject<HTMLButtonElement>;
  onOpen: () => void;
}
const AppHeader: React.FC<AppHeaderProps> = ({ btnRef, onOpen }) => {
  const tes = () => {
    console.log("cicked");
    onOpen();
  };
  return (
    <>
      <Grid className="App-header">
        <Grid templateColumns="repeat(2, 1fr)" paddingX={"9"} paddingTop={"9"}>
          <GridItem>
            <img src={BrandLogo} className="App-logo" alt="logo" />
          </GridItem>
          <GridItem colEnd={6}>
            <Button
              variant={"none"}
              ref={btnRef}
              className="hamburger-logo"
              onClick={() => onOpen()}
            >
              <Hamburger />
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
    </>
  );
};

export default AppHeader;
