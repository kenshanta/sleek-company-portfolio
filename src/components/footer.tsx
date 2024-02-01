import { Grid, GridItem, Text } from "@chakra-ui/react";
import logo from "../mockLogo.svg";
import { FaInstagram } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function AppFooter() {
  return (
    <Grid
      display={"flex"}
      justifyContent={"space-between"}
      gap="5"
      paddingX={"9"}
      paddingY={"7"}
    >
      <Grid>
        <GridItem
          display={"flex"}
          flexDirection={"row"}
          alignContent={"center"}
          alignItems={"center"}
          gap={"4"}
        >
          <GridItem>
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
        </GridItem>
      </Grid>
      <GridItem>
        <img src={logo} className="App-logo" alt="logo" />
      </GridItem>
    </Grid>
  );
}
