import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import BrandWhiteLogo from "../logo-white.svg";
import TermsAndLiscences from "./termsAndLiscences";
import PrivacyAndPolicy from "./privacyPolicy";
import { VscChromeClose } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

interface CustomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
}
const HamburgerDrawer: React.FC<CustomDrawerProps> = ({
  isOpen = true,
  onClose,
  btnRef,
}) => {
  const { i18n } = useTranslation();
  const [isTermsHidden, setIsTermsHidden] = React.useState(true);
  const [isPrivacyHidden, setIsPrivacyHidden] = React.useState(true);
  const [isNavButtonsHidden, setIsNavButtonsHidden] = React.useState(false);
  const [currentNav, setCurrentNav] = React.useState("");

  const scrollToIndex = (id: string) => {
    const divElement = document.getElementById(id);
    onClose();
    divElement?.scrollIntoView({ behavior: "smooth" });
  };

  const onNavBtnClick = (id: string) => {
    setIsNavButtonsHidden(true);

    if (id === "privacy") {
      setCurrentNav("Privacy and Policiy");
      setIsPrivacyHidden(false);
    } else if (id === "terms") {
      setCurrentNav("Terms and Conditions");
      setIsTermsHidden(false);
    }
  };
  const onCloseSubNavMenu = () => {
    setIsNavButtonsHidden(false);
    setIsTermsHidden(true);
    setIsPrivacyHidden(true);
    setCurrentNav("");
  };
  const onLangChange = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("de");
    } else {
      i18n.changeLanguage("en");
    }
    onClose();
  };
  return (
    <Drawer
      finalFocusRef={btnRef}
      placement="top"
      onClose={onCloseSubNavMenu}
      isOpen={isOpen}
      size={"xs"}
      autoFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent className="Menu-drawer">
        <DrawerCloseButton fontSize={"1.3rem"} variant={"none"} />
        <DrawerHeader
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          fontSize={"large"}
          borderBottomWidth=".9px"
        >
          <Box>
            <img
              className="Menu-drawer-logo"
              src={BrandWhiteLogo}
              alt="blackLogo"
            />
          </Box>
          <Box display={"flex"} justifyContent={"end"}>
            <Text fontSize={"2xl"}>{currentNav}</Text>
          </Box>
        </DrawerHeader>

        <DrawerBody
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
          gap={10}
          paddingBottom={9}
          className="Menu-drawer-body"
        >
          <Button
            onClick={() => onLangChange()}
            variant={"none"}
            hidden={isNavButtonsHidden}
            width={"fit-content"}
          >
            <Text fontSize={"large"}>
              {i18n.language === "en" ? "Deutsch" : "English"}
            </Text>
          </Button>
          <Button
            onClick={() => scrollToIndex("componentToScrollTo")}
            variant={"none"}
            hidden={isNavButtonsHidden}
            width={"fit-content"}
          >
            <Text fontSize={"large"}>Contact</Text>
          </Button>
          <Button
            onClick={() => onNavBtnClick("terms")}
            variant={"none"}
            hidden={isNavButtonsHidden}
          >
            <Text fontSize={"large"}>Terms & Liscenses</Text>
          </Button>
          <Button
            variant={"none"}
            hidden={isNavButtonsHidden}
            onClick={() => onNavBtnClick("privacy")}
          >
            <Text fontSize={"large"}>Pivacy & Policy</Text>
          </Button>
          <TermsAndLiscences isHidden={isTermsHidden} />
          <PrivacyAndPolicy isHidden={isPrivacyHidden} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default HamburgerDrawer;
