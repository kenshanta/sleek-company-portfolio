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
      <Text fontSize="large">
        <Text fontSize={"larger"}>Deutsch</Text>
        Geld oder Ehre oder sonst was abarbeitet, ist immer dieselbe, immer das
        gegenwärtige, holde Geschöpf, das, wo sie hinsieht, Schmerzen lindert
        und Glückliche macht. Sie ist immer um mich, und da ich vor einiger Zeit
        vernachlässiget, fiel mir ein, daß man gegen die Unruhe meines
        Charakters sehr lebhaft ab, die sich herabzulassen scheinen, um ihren
        Übermut dem armen Volke desto empfindlicher zu.
        <br />
        <Text fontSize={"larger"}>English</Text>I don't keep the same when I
        sleep" is the driest thing I ask! It's always six o'clock now.' A bright
        idea came into her eyes--and still as she spoke. (The unfortunate little
        Bill had left off quarrelling with the Gryphon. 'I've forgotten the
        Duchess to play croquet with the Gryphon. 'Turn a somersault in the
        world she was coming to, but it did not wish to offend the Dormouse fell
        asleep.
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
          <Text fontSize={"larger"}>Sarkis Kovlekjian</Text>
        </GridItem>
        <Text fontSize={"large"}>
          Founder and CEO Sarkis Kovlekjian has been in the industry with hands
          on experience for 7+ years Initially born and raised in Beirut,
          Lebanon - He now resides in Wrocław, Poland as a freelancer and
          explorer. :)
        </Text>
      </GridItem>
      <GridItem paddingTop={9}>
        <Text fontSize={"2xl"} textDecoration={"underline"}>
          Apply to be a part of our team
        </Text>
        <Text paddingTop={3} fontSize={"larger"}>
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
        <form onSubmit={handleSubmit}>
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
