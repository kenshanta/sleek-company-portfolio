import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Button,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";

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
    onClose();
  };

  return (
    <Drawer
      finalFocusRef={btnRef}
      placement="top"
      onClose={onCloseSubNavMenu}
      isOpen={isOpen}
      autoFocus={false}
      styleConfig={{ bottom: 10 }}
    >
      <DrawerContent className="Menu-drawer">
        <DrawerHeader className="Menu-drawer-logo">
          <Button
            visibility={isNavButtonsHidden ? "initial" : "hidden"}
            onClick={() => onCloseSubNavMenu()}
          >
            <VscChromeClose />
          </Button>

          <i>{currentNav}</i>
        </DrawerHeader>

        <DrawerBody className="Menu-drawer-body" overflow={"scroll"}>
          <Button
            onClick={() => onLangChange()}
            variant={"none"}
            width={"fit-content"}
            hidden={isNavButtonsHidden}
          >
            <u>{i18n.language === "en" ? "Deutsch" : "English"}</u>
          </Button>
          <Button
            onClick={() => scrollToIndex("componentToScrollTo")}
            variant={"none"}
            width={"fit-content"}
            hidden={isNavButtonsHidden}
          >
            <u>Contact</u>
          </Button>
          <Button
            onClick={() => onNavBtnClick("terms")}
            variant={"none"}
            hidden={isNavButtonsHidden}
          >
            <u>Terms & Conditions</u>
          </Button>
          <Button
            onClick={() => onNavBtnClick("privacy")}
            variant={"none"}
            hidden={isNavButtonsHidden}
          >
            <u>Privacy & Policy</u>
          </Button>
          <TermsAndLiscences isHidden={isTermsHidden} />
          <PrivacyAndPolicy isHidden={isPrivacyHidden} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default HamburgerDrawer;
