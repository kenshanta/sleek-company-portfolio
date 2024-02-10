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
import BlackLogo from "../logo-black.svg";
import TermsAndLiscences from "./termsAndLiscences";
import PrivacyAndPolicy from "./privacyPolicy";
import { VscChromeClose } from "react-icons/vsc";

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
  const [isTermsHidden, setIsTermsHidden] = React.useState(true);
  const [isPrivacyHidden, setIsPrivacyHidden] = React.useState(true);
  const [isNavButtonsHidden, setIsNavButtonsHidden] = React.useState(false);
  const [currentNav, setCurrentNav] = React.useState("Menu");
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
    setCurrentNav("Menu");
  };
  return (
    <Drawer
      finalFocusRef={btnRef}
      placement="right"
      onClose={onClose}
      isOpen={isOpen}
      size={"full"}
    >
      <DrawerOverlay />
      <DrawerContent className="Menu-drawer">
        <DrawerCloseButton
          padding={9}
          marginTop={3}
          variant={"none"}
          fontSize={"3xl"}
          onClick={() => onCloseSubNavMenu()}
        />
        <DrawerHeader
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          fontSize={"2xl"}
          borderBottomWidth=".5px"
        >
          <Box>
            <img className="Menu-drawer-logo" src={BlackLogo} alt="blackLogo" />
          </Box>
          <Box display={"flex"} justifyContent={"end"}>
            <Text fontSize={"4xl"}>{currentNav}</Text>
          </Box>
        </DrawerHeader>
        <Button
          size={"lg"}
          variant={"none"}
          alignContent={"center"}
          justifyContent={"start"}
          visibility={isNavButtonsHidden ? "initial" : "hidden"}
          onClick={() => onCloseSubNavMenu()}
        >
          <VscChromeClose /> &nbsp;Close Me
        </Button>

        <DrawerBody
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          columnGap={10}
        >
          <Button
            onClick={() => scrollToIndex("componentToScrollTo")}
            variant={"none"}
            padding={9}
            hidden={isNavButtonsHidden}
          >
            <Text fontSize={"3xl"}>Contact</Text>
          </Button>
          <Button
            onClick={() => scrollToIndex("applicationId")}
            variant={"none"}
            padding={9}
            hidden={isNavButtonsHidden}
          >
            <Text fontSize={"3xl"}>Jobs</Text>
          </Button>
          <Button
            onClick={() => onNavBtnClick("terms")}
            variant={"none"}
            padding={9}
            hidden={isNavButtonsHidden}
          >
            <Text fontSize={"3xl"}>Terms and Liscenses</Text>
          </Button>
          <Button
            variant={"none"}
            padding={9}
            hidden={isNavButtonsHidden}
            onClick={() => onNavBtnClick("privacy")}
          >
            <Text fontSize={"3xl"}>Pivacy Policy</Text>
          </Button>
          <TermsAndLiscences isHidden={isTermsHidden} />
          <PrivacyAndPolicy isHidden={isPrivacyHidden} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default HamburgerDrawer;
