import React from "react";
import {
  GridItem,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Select,
  Box,
  Collapse,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import logo from "../profile.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface AppBodyProps {}
const AppBody: React.FC<AppBodyProps> = () => {
  const [status, setStatus] = React.useState("Submit");
  const { t } = useTranslation();
  const [showCeo, setShowCeo] = React.useState(false);
  const [showCompany, setShowCompany] = React.useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(false);

  const handleSubmit = async (e: any) => {
    setIsSubmitDisabled(false);

    console.log("event values", e.target.elements);
    e.preventDefault();
    setStatus("Sending...");
    toast.warning("Form under construction", { position: "top-center" });
    setStatus("Submit");
  };
  return (
    <GridItem
      className="App-body"
      padding={{
        base: "2.5rem",
        sm: "3.5rem",
        md: "4rem 7rem 4rem 7rem",
        lg: "7rem 10rem 7rem 10rem",
        xl: "10rem 19.5rem 10rem 19.5rem",
        "2xl": "0 29rem 0 29rem",
      }}
    >
      <ToastContainer />
      <GridItem paddingBottom={6}>
        <Text fontSize={"3xl"} textDecoration={"underline"}>
          {t("whoWeAre")}
        </Text>
      </GridItem>
      <Box fontWeight={"100"} paddingBottom={9}>
        <Collapse animateOpacity={true} startingHeight={90} in={showCompany}>
          &nbsp; {t("companyIntro")}
          <br />
          &nbsp; {t("companySecondaryIntro")}
        </Collapse>
        <Button
          variant={"none"}
          size="sm"
          onClick={() => setShowCompany(!showCompany)}
          mt="1rem"
        >
          Show {showCompany ? "Less " : "More "}&nbsp;
          {showCompany ? <FaChevronUp /> : <FaChevronDown />}
        </Button>
      </Box>
      <GridItem paddingY={9}>
        <Text fontSize={"3xl"} textDecoration={"underline"}>
          {t("aboutTheTeam")}
        </Text>
        <GridItem
          alignItems={"center"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"start"}
          paddingLeft={5}
          paddingY={5}
        >
          <Avatar size={"md"} name="Sarkis Kovlekjian" src={logo}></Avatar>
          <Text paddingLeft={2}>Sarkis Kovlekjian</Text>
        </GridItem>
        <Collapse in={showCeo} startingHeight={90}>
          {t("ceoIntro")}
        </Collapse>
        <Button
          variant={"none"}
          size="sm"
          onClick={() => setShowCeo(!showCeo)}
          mt="1rem"
        >
          Show {showCeo ? "Less " : "More "}&nbsp;
          {showCeo ? <FaChevronUp /> : <FaChevronDown />}
        </Button>
      </GridItem>
      <GridItem paddingTop={9}>
        <Text fontSize={"3xl"} textDecoration={"underline"}>
          {t("applyToTeam")}
        </Text>
        <Text paddingTop={9} textColor={"#800002"} textStyle={"italic"}>
          {t("formInfo")}
        </Text>
        <form id="applicationId" onSubmit={handleSubmit}>
          <FormControl padding={8}>
            <FormLabel
              display={"flex"}
              flexDirection={"row"}
              htmlFor="fullName"
            >
              {t("formFullName")}&nbsp; <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <Input required id="fullName" />
            <FormLabel
              display={"flex"}
              flexDirection={"row"}
              paddingTop={2}
              htmlFor="email"
            >
              {t("formEmailAddress")}&nbsp;
              <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <Input autoComplete="on" required id="email" type="email" />
            <FormLabel
              display={"flex"}
              flexDirection={"row"}
              paddingTop={2}
              htmlFor="reason"
            >
              {t("formAvailability")}&nbsp;
              <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <Select id="reason" required>
              <option value="option0" hidden>
                {t("formPlaceholder")}
              </option>
              <option value="option1">{t("formAvailFirstOpt")}</option>
              <option value="option2">{t("formAvailSecondOpt")}</option>
              <option value="option3">{t("formAvailThirdOpt")}</option>
            </Select>

            <FormHelperText>{t("formConsent")}</FormHelperText>
          </FormControl>
          <Button id="submitt" isDisabled={isSubmitDisabled} type="submit">
            {status}
          </Button>
        </form>
      </GridItem>
    </GridItem>
  );
};
export default AppBody;
