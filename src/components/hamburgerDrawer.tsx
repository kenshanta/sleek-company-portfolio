import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Button,
  Box,
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
        <DrawerHeader fontSize={"large"}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Button
              variant={"none"}
              visibility={isNavButtonsHidden ? "initial" : "hidden"}
              onClick={() => onCloseSubNavMenu()}
              width={"fit-content"}
            >
              <VscChromeClose /> &nbsp;Close Me
            </Button>

            <Text padding={1} fontSize={"2xl"}>
              {currentNav}
            </Text>
          </Box>
        </DrawerHeader>
        <DrawerBody className="Menu-drawer-body" overflow={"scroll"}>
          <Button
            onClick={() => onLangChange()}
            variant={"none"}
            width={"fit-content"}
            hidden={isNavButtonsHidden}
          >
            <Text as={"u"} fontSize={"large"}>
              {i18n.language === "en" ? "Deutsch" : "English"}
            </Text>
          </Button>
          <Button
            onClick={() => scrollToIndex("componentToScrollTo")}
            variant={"none"}
            width={"fit-content"}
            hidden={isNavButtonsHidden}
          >
            <Text as={"u"} fontSize={"large"}>
              Contact
            </Text>
          </Button>
          <Button
            onClick={() => onNavBtnClick("terms")}
            variant={"none"}
            hidden={isNavButtonsHidden}
          >
            <Text as={"u"} fontSize={"large"}>
              Terms & Conditions
            </Text>
          </Button>
          <Button
            onClick={() => onNavBtnClick("privacy")}
            variant={"none"}
            hidden={isNavButtonsHidden}
          >
            <Text as={"u"} fontSize={"large"}>
              Privacy & Policy
            </Text>
          </Button>
          <TermsAndLiscences isHidden={isTermsHidden} />
          <PrivacyAndPolicy isHidden={isPrivacyHidden} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default HamburgerDrawer;
