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

interface AppBodyProps {
  btnRef: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: () => void;
}
const AppBody: React.FC<AppBodyProps> = ({ btnRef, isOpen, onClose }) => {
  const [status, setStatus] = React.useState("Submit");
  const handleSubmit = async (e: any) => {
    console.log("event values", e.target.elements);
    e.preventDefault();
    setStatus("Sending...");
    const { fullName, email, phoneNumber, birthday } = e.target.elements;
    let details = {
      fullName: fullName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      birthday: birthday.value,
    };
    let response = await fetch("http://localhost:8080/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.message);
  };
  return (
    <GridItem className="App-body">
      <GridItem>
        <Text fontSize={"2xl"} textDecoration={"underline"}>
          Who we are:
        </Text>
      </GridItem>
      <Text>
        &nbsp; Work2Gether is specified on the realization of services in the
        field of event gastronomy, expos and conventions and in the hospitality
        industry. Our main focus are all responsibilities in the field of
        logistics of your event. This includes setup and tear-down, event hands,
        event runners, storage activities, stewarding as well as coordination
        and leadership staff.
        <br />
        &nbsp; We want to offer our clients a quality standard that ensures the
        smoothest course through your event. Our formula for your success is
        efficiency and teamwork. We know from our own experience that logistics
        is the most labor-intensive department of any event and all others
        depend on it. We all know this too well: when the logistics goes down
        the well, the whole event goes down with it. This is why we are
        delighted to train our staff according to the individual demands of our
        client. It is of uttermost importance for us to be flexible and reliable
        in providing competent staff for your event and to create a reoccurring
        relationship with you.
      </Text>
      <GridItem paddingTop={9}>
        <Text textDecoration={"underline"} fontSize={"2xl"}>
          Meet The Team:
        </Text>
        <GridItem
          gap={3}
          alignItems={"center"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"start"}
          paddingLeft={5}
          paddingTop={1}
        >
          <Avatar size={"md"} name="Sarkis Kovlekjian" src={logo}></Avatar>
          <Text fontSize={"large"}>Sevag Mkhitarian</Text>
        </GridItem>
        <Text fontSize={"medium"}>
          I have over 7 years of experience in the field of events and
          logistics. In the beginning I was just a regular part-time logistics
          employee, making my way through various events in Berlin and gathering
          experience. Over the course of time I received more and more
          responsibility because my work ethic and personality resonated
          positively with the clients. I stepped into the role of a team leader,
          who acts as a point of contact between the staff and clients. After a
          couple years I took more responsibility and was in charge of the whole
          logistics department of diverse events, acting as a logistics
          coordinator. From events to hotels to expos I have consistently taken
          leadership and began developing the idea of starting my own business.
          Work2Gether is my personal dream of the perfect team, that respects
          quality, loyalty and team spirit as their lead motif. Together with my
          team I want to exceed the expectations of our clients and leave a
          positive impression. Lets reach big things together!
          <i>We rise by lifting others.</i>
        </Text>
      </GridItem>
      <GridItem paddingTop={9}>
        <Text fontSize={"2xl"} textDecoration={"underline"}>
          Apply to be a part of our team
        </Text>
        <Text paddingTop={3} fontSize={"medium"}>
          Are you a student between 18-25 years old and is looking for a
          part-time employment in a fast-paced fun environment?
        </Text>
        <Text
          paddingTop={9}
          textColor={"#800002"}
          textStyle={"italic"}
          fontSize={"large"}
        >
          The Form Currently Testable but Unsubmitable
        </Text>
        <form id="applicationId" onSubmit={handleSubmit}>
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
            <Select id="availability" placeholder="Select option">
              <option value="option1">As soon as possible</option>
              <option value="option2">1-2 weeks</option>
              <option value="option3">2-4 weeks</option>
            </Select>

            <FormHelperText>
              Provided data are never shared without consent.
            </FormHelperText>
          </FormControl>
          <Button isDisabled type="submit">
            {status}
          </Button>
        </form>
      </GridItem>
    </GridItem>
  );
};
export default AppBody;
