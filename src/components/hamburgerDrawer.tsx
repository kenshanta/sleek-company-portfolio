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
import { useTranslation } from "react-i18next";
import { VscChromeClose } from "react-icons/vsc";

interface CustomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
}
const HamburgerDrawer: React.FC<CustomDrawerProps> = ({
  isOpen,
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
      setCurrentNav("Privacy & Policy");
      setIsPrivacyHidden(false);
    } else if (id === "terms") {
      setCurrentNav("Terms & Conditions");
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
    //     onClose();
  };

  return (
    <Drawer
      finalFocusRef={btnRef}
      placement="top"
      onClose={onCloseSubNavMenu}
      isOpen={isOpen}
      size={"xs"}
      autoFocus={false}
      styleConfig={{ bottom: 10 }}
    >
      <DrawerOverlay />
      <DrawerContent className="Menu-drawer" overflow={"scroll"}>
        <DrawerHeader
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"end"}
          fontSize={"large"}
        >
          <Box>
            <img
              className="Menu-drawer-logo"
              src={BrandWhiteLogo}
              alt="blackLogo"
            />
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Button
              variant={"none"}
              alignContent={"center"}
              justifyContent={"start"}
              visibility={isNavButtonsHidden ? "initial" : "hidden"}
              onClick={() => onCloseSubNavMenu()}
              width={"fit-content"}
            >
              <VscChromeClose /> &nbsp;Close Me
            </Button>
            <Text fontSize={"2xl"}>{currentNav}</Text>
          </Box>
        </DrawerHeader>

        <DrawerBody className="Menu-drawer-body">
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
            <Text fontSize={"large"}>Terms & Conditions</Text>
          </Button>
          <Button
            hidden={isNavButtonsHidden}
            onClick={() => onNavBtnClick("privacy")}
            variant={"none"}
          >
            <Text fontSize={"large"}>Privacy & Policy</Text>
          </Button>
          <TermsAndLiscences isHidden={isTermsHidden} />
          <PrivacyAndPolicy isHidden={isPrivacyHidden} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default HamburgerDrawer;
