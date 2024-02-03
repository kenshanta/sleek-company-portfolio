import { Grid, GridItem, Text } from "@chakra-ui/react";
import logo from "../mockLogo.svg";
import { FaInstagram } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

export default function AppFooter() {
  return (
    <GridItem
      className="App-footer"
      display={"flex"}
      justifyContent={"space-between"}
      gap="5"
      paddingX={"9"}
      paddingY={"7"}
      alignItems={"center"}
    >
      <GridItem display={"flex"} flexDirection={"row"} gap={"4"}>
        <GridItem display={"flex"} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={"larger"}>
            Get in touch:
          </Text>
        </GridItem>
        <GridItem>
          <FaInstagram size={"6vmin"} />
        </GridItem>
        <GridItem>
          <MdAlternateEmail size={"6vmin"} />
        </GridItem>
        <GridItem>
          <FiPhoneCall size={"6vmin"} />
        </GridItem>
      </GridItem>
      <GridItem>
        <img src={logo} className="App-logo" alt="logo" />
      </GridItem>
    </GridItem>
  );
}
