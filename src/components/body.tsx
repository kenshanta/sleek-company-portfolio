import React from "react";
import {
  GridItem,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Select,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import logo from "../profile.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AppBodyProps {
  btnRef: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: () => void;
}
const AppBody: React.FC<AppBodyProps> = ({ btnRef, isOpen, onClose }) => {
  const [status, setStatus] = React.useState("Submit");

  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(false);
  const handleSubmit = async (e: any) => {
    setIsSubmitDisabled(false);

    console.log("event values", e.target.elements);
    e.preventDefault();
    setStatus("Sending...");
    toast.warning("Form under construction", { position: "top-center" });
    // TODO: Backend under construction to be built a by buyi ng a server
    // const { fullName, email, phoneNumber, birthday } = e.target.elements;
    // let details = {
    //   fullName: fullName.value,
    //   email: email.value,
    //   phoneNumber: phoneNumber.value,
    //   birthday: birthday.value,
    // };
    // let response = await fetch("http://localhost:8080/form", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //   },
    //   body: JSON.stringify(details),
    // });
    setStatus("Submit");
    // toast.success("submitted");
  };
  return (
    <GridItem
      className="App-body"
      padding={{
        base: "0 2.5rem 0  2.5rem",
        sm: "0 3.5rem 0  3.5rem",
        md: "0 7rem 0rem 7rem",
        lg: "0 10rem 0 10rem",
        xl: "0 19.5rem 0 19.5rem",
        "2xl": "0 29rem 0 29rem",
      }}
    >
      <ToastContainer />
      <GridItem>
        <Text fontSize={"3xl"} textDecoration={"underline"}>
          Who we are:
        </Text>
      </GridItem>
      <Text fontSize={"sm"} paddingBottom={9}>
        &nbsp; Work2Gether specializes in providing services in event
        gastronomy, expos, conventions, and the hospitality industry. Our
        primary focus is on handling all logistics aspects of your event,
        including setup and teardown, event staffing, storage management,
        stewarding, as well as coordination and leadership roles. We aim to
        deliver a quality standard that ensures the seamless execution of your
        event. Our success formula revolves around efficiency and teamwork.
        <br />
        &nbsp; Drawing from our extensive experience, we understand that
        logistics is the backbone of any event, upon which all other aspects
        depend. We recognize the critical importance of logistics functioning
        smoothly; any breakdown in this area can jeopardize the entire event.
        Therefore, we take pride in training our staff to meet the specific
        needs of each client. Flexibility and reliability in providing competent
        staff are paramount to us, as we strive to establish enduring
        relationships with our clients.
      </Text>
      <GridItem paddingY={9}>
        <Text fontSize={"3xl"} textDecoration={"underline"}>
          Meet The Team:
        </Text>
        <GridItem
          gap={3}
          alignItems={"center"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"start"}
          paddingLeft={5}
          paddingY={5}
        >
          <Avatar size={"md"} name="Sarkis Kovlekjian" src={logo}></Avatar>
          <Text>Sevag Mkhitarian</Text>
        </GridItem>
        <Text>
          CEO, Founder and Team Leader - Sevag Mkhitarian has over 7 years of
          experience in the field of events and logistics. In the beginning;
          just a regular part-time logistics employee, making my way through
          various events in Berlin and gathering experience. Over the course of
          time I received more and more responsibility because my work ethic and
          personality resonated positively with the clients. I stepped into the
          role of a team leader, who acts as a point of contact between the
          staff and clients. After a couple years I took more responsibility and
          was in charge of the whole logistics department of diverse events,
          acting as a logistics coordinator. From events to hotels to expos I
          have consistently taken leadership and began developing the idea of
          starting my own business. Work2Gether is my personal dream of the
          perfect team, that respects quality, loyalty and team spirit as their
          lead motif. Together with my team I want to exceed the expectations of
          our clients and leave a positive impression. Lets reach big things
          together!
          <i>We rise by lifting others.</i>
        </Text>
      </GridItem>
      <GridItem paddingTop={9}>
        <Text fontSize={"3xl"} textDecoration={"underline"}>
          Apply to be a part of our team
        </Text>
        <Text paddingTop={3}>
          Are you a student between 18-25 years old and is looking for a
          part-time employment in a fast-paced fun environment?
        </Text>
        <Text paddingTop={9} textColor={"#800002"} textStyle={"italic"}>
          The Form is Testable but Unsubmitable
        </Text>
        <form
          id="applicationId"
          onSubmit={handleSubmit}
          // for={() => console.log("chnaged")}
        >
          <FormControl padding={8}>
            <FormLabel display={"flex"} flexDirection={"row"} id="fullName">
              Full Name&nbsp; <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <Input required id="fullName" />
            <FormLabel
              display={"flex"}
              flexDirection={"row"}
              paddingTop={2}
              id="email"
            >
              Email address&nbsp;
              <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <Input required id="email" type="email" />
            <FormLabel
              display={"flex"}
              flexDirection={"row"}
              paddingTop={2}
              id="birthday"
            >
              Date Of Birth&nbsp;
              <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <Input required id="birthday" type="date" />
            <FormLabel
              display={"flex"}
              flexDirection={"row"}
              paddingTop={2}
              id="phoneNumber"
            >
              Phone number&nbsp;
              <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <InputGroup>
              <InputLeftAddon>+49</InputLeftAddon>
              <Input
                required
                id="phoneNumber"
                type="number"
                placeholder="phone number"
              />
            </InputGroup>
            <FormLabel
              display={"flex"}
              flexDirection={"row"}
              paddingTop={2}
              id="availability"
            >
              Availability&nbsp;
              <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <Select id="availability" required>
              <option value="" disabled selected hidden>
                Please Choose...
              </option>
              <option value="option1">As soon as possible</option>
              <option value="option2">1-2 weeks</option>
              <option value="option3">2-4 weeks</option>
            </Select>

            <FormHelperText>
              Provided data are never shared without consent.
            </FormHelperText>
          </FormControl>
          <Button isDisabled={isSubmitDisabled} type="submit">
            {status}
          </Button>
        </form>
      </GridItem>
    </GridItem>
  );
};
export default AppBody;
