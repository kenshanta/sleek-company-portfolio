import React from "react";
import { Grid, GridItem, Text, Box, Image } from "@chakra-ui/react";
import BrandLogo from "../logo-white.svg";
import Work2GetherLogo from "../Work2gether.svg?react";
import { t } from "i18next";

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
      >
        <Image src={BrandLogo} className="App-logo" alt="logo" />
        <GridItem
          marginBottom={6}
          display={"flex"}
          colEnd={6}
          onClick={() => clicked()}
          alignItems={"center"}
        >
          <input id="checkbox" type="checkbox"></input>
          <label className="toggle" htmlFor="checkbox">
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars"></div>
            <div id="bar3" className="bars"></div>
          </label>
        </GridItem>
      </Grid>
      <GridItem marginTop={9} textColor={"white"}>
        <GridItem>
          <Work2GetherLogo />
        </GridItem>
        <GridItem
          justifyContent={"center"}
          display={"flex"}
          flexDirection={"row"}
        >
          <Text id="firstDiv"> {t("subHeader0")}&nbsp;</Text>
          <Box
            id="secondDiv"
            justifyContent={"start"}
            display={"flex"}
            flexDirection={"row"}
          >
            <Text id="spanInDiv">
              <b>{t("subHeader1")}</b>&nbsp;
            </Text>
            <Text id="spanInDivSec">{t("subHeader2")}</Text>
          </Box>
        </GridItem>
      </GridItem>
    </>
  );
};

export default AppHeader;
