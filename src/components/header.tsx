import React from "react";
import { Grid, GridItem, Text, Box, Image } from "@chakra-ui/react";
import BrandLogo from "../logo-white.svg";
import SlkCmpLogo from "../SlkCmpLogo.svg?react";
import { t } from "i18next";

interface AppHeaderProps {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ onOpen, isOpen, onClose }) => {
  return (
    <>
      <Grid className="App-header">
        <Image src={BrandLogo} className="App-logo" alt="logo" />
        <GridItem display={"flex"} colEnd={6} alignItems={"center"}>
          <input id="checkbox" type="checkbox"></input>
          <label
            className="toggle"
            htmlFor="checkbox"
            onClick={() => (isOpen ? onClose() : onOpen())}
          >
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars"></div>
            <div id="bar3" className="bars"></div>
          </label>
        </GridItem>
      </Grid>
      <GridItem className="Header-banner" textColor={"white"}>
        {/* TODO: Enable this feature once figured out dark mode theme on chakra-ui
         <input
          onClick={() => document.body.classList.toggle("dark-theme")}
          type="checkbox"
          className="theme-checkbox"
        ></input> */}

        <SlkCmpLogo />
        <GridItem
          justifyContent={"center"}
          display={"flex"}
          flexDirection={"row"}
          className="sub-header"
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
