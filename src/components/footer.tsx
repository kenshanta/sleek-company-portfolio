import { GridItem, Text } from "@chakra-ui/react";
import BrandLogo from "../logo-white.svg";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { t } from "i18next";

export default function AppFooter() {
  return (
    <GridItem
      id="componentToScrollTo"
      className="App-footer"
      display={"flex"}
      justifyContent={"space-between"}
      paddingX={"5"}
      paddingTop={"7"}
      alignItems={"center"}
    >
      <GridItem display={"flex"} flexDirection={"row"} gap={"4"}>
        <GridItem display={"flex"} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={"larger"}>
            {t("getInTouch")}
          </Text>
        </GridItem>
        <GridItem>
          <a href="https://www.instagram.com/worktwogether/">
            <FaInstagram size={"6vmin"} />
          </a>
        </GridItem>
        <GridItem>
          <a href="mailto:user@domain.com?Subject=Hello%20User">
            <MdAlternateEmail size={"6vmin"} />
          </a>
        </GridItem>
        <GridItem>
          <a href="https://github.com/kenshanta">
            <FaGithub size={"6vmin"} />
          </a>
        </GridItem>
      </GridItem>
      <GridItem>
        <img src={BrandLogo} className="App-logo" alt="logo" />
      </GridItem>
    </GridItem>
  );
}
