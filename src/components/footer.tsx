import { GridItem, Image, Text } from "@chakra-ui/react";
import BrandLogo from "../logo-white.svg";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { t } from "i18next";

export default function AppFooter() {
  return (
    <GridItem id="componentToScrollTo" className="App-footer">
      <GridItem
        display={"flex"}
        alignItems={"center"}
        flexDirection={"row"}
        gap={"4"}
      >
        <GridItem display={"flex"}>
          <Text fontWeight={"bold"} fontSize={"larger"}>
            {t("getInTouch")}
          </Text>
        </GridItem>
        <GridItem>
          <a href="https://www.instagram.com/kovlekjian/">
            <FaInstagram size={"6vmin"} />
          </a>
        </GridItem>
        <GridItem>
          <a href="mailto:sako.orange@gmail.com?Subject=Hello%20User">
            <MdAlternateEmail size={"6vmin"} />
          </a>
        </GridItem>
        <GridItem>
          <a href="https://github.com/kenshanta">
            <FaGithub size={"6vmin"} />
          </a>
        </GridItem>
      </GridItem>

      <Image src={BrandLogo} className="App-logo" alt="logo" />
    </GridItem>
  );
}
