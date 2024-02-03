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
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import logo from "../profile.jpeg";

export default function AppBody() {
  return (
    <GridItem className="App-body">
      <GridItem>
        <Text fontSize={"4xl"} textDecoration={"underline"}>
          Who we are:
        </Text>
      </GridItem>
      <Text fontSize="2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Es
      </Text>
      <GridItem paddingTop={9}>
        <Text textDecoration={"underline"} fontSize={"4xl"}>
          Meet The Team:
        </Text>
        <GridItem
          gap={3}
          alignItems={"center"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"start"}
          paddingLeft={5}
          paddingTop={3}
        >
          <Avatar size={"md"} name="Sarkis Kovlekjian" src={logo}></Avatar>
          <Text fontSize={"xl"}>Sarkis Kovlekjian</Text>
        </GridItem>
        <Text fontSize={"2xl"}>
          Founder and CEO Sarkis Kovlekjian has been in the industry with hands
          on experience for 7+ years
        </Text>
      </GridItem>
      <GridItem paddingTop={9}>
        <Text fontSize={"4xl"} textDecoration={"underline"}>
          Apply & be a part of our team
        </Text>
        <FormControl color={"white"} gap={9}>
          <FormLabel>Name</FormLabel>
          <Input />
          <FormLabel>Surname</FormLabel>
          <Input />
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormLabel>Date Of Birth</FormLabel>
          <Input type="date" />
          <FormLabel>Phone number</FormLabel>
          <InputGroup>
            <InputLeftAddon>+234</InputLeftAddon>
            <Input type="tel" placeholder="phone number" />
          </InputGroup>

          <FormHelperText>
            Provided data are never shared without consent.
          </FormHelperText>
        </FormControl>
        <GridItem paddingTop={3}>
          <Button type="submit">Submit</Button>
        </GridItem>
      </GridItem>
    </GridItem>
  );
}
