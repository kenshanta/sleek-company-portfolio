import { GridItem, Text } from "@chakra-ui/react";
import BrandLogo from "../logo-white.svg";
import { FaInstagram } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

export default function AppFooter() {
  return (
    <GridItem
      className="App-footer"
      display={"flex"}
      justifyContent={"space-between"}
      paddingX={"7"}
      paddingTop={"7"}
      alignItems={"center"}
    >
      <GridItem display={"flex"} flexDirection={"row"} gap={"4"}>
        <GridItem display={"flex"} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={"larger"}>
            Get in touch:
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
          <a href="tel:+491637874040">
            <FiPhoneCall size={"6vmin"} />
          </a>
        </GridItem>
      </GridItem>
      <GridItem>
        <img src={BrandLogo} className="App-logo" alt="logo" />
      </GridItem>
    </GridItem>
  );
}
