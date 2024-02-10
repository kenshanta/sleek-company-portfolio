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

      <Text fontSize={"larger"}>Deutsch</Text>
      <Text>
        &nbsp; Work2Gether spezifiziert sich auf die qualitative Umsetzung von
        Dienstleistungen im Bereich der Eventgastronomie, auf Messen und der
        Hotellerie. Unser hauptsächlicher Fokus liegt auf alle Aufgaben im
        Bereich der Logistik Ihrer Veranstaltung. Dazu gehören unter anderem
        Auf- und Abbau, Event Hands, Runner, Lagertätigkeiten, Stewarding ,
        sowie Koordinations- und Leitungspersonal.
        <br />
        &nbsp; Wir möchten unseren Kunden einen Qualitätsstandard bieten, der
        den reibungslosen Ablauf ihrer Veranstaltung versichert. Unsere Formel
        für Ihren Erfolg ist Effizienz und Teamwork. Aus eigener Erfahrung ist
        uns bewusst, dass die Logistik der arbeitsintensivste Teil der
        Veranstaltung ist und alle anderen von ihr abhängig sind. Wir kennen es
        alle: Wenn die Logistik baden geht, geht die Veranstaltung baden.
        Deshalb schulen wir unserer Personal gerne auf die Ansprüche unserer
        individuellen Kunden. Uns ist am wichtigsten zuverlässig und flexibel
        kompetentes Personal für Ihre Veranstaltungen zu stellen und dieses
        Personal mittel- und langfristig wiederholt in Ihren Veranstaltungen
        einzusetzen.
      </Text>
      <br />
      <Text fontSize={"larger"}>English</Text>
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
          <Text fontSize={"larger"}>Sevag Mekhitarian</Text>
        </GridItem>
        <Text fontSize={"large"}>
          Seit über 7 Jahren habe ich Erfahrungen im Bereich Events und deren
          Logistik. Anfangs war ich ganz normal als Logistiker in Teilzeit auf
          diversen Events unterwegs und habe über Zeit immer mehr Verantwortung
          übernommen, da mein Arbeitsethos und meine Ausstrahlung stets gut mit
          Kunden resonierte. Ich schlüpfte in die Rolle eines Teamleiters, der
          innerhalb eines Teams aber auch für Kunden als Ansprechpartner gilt.
          Nach einigen Jahren übernahm ich die Verantwortung für die gesamte
          Logistik von Veranstaltungen als Logistikleiter. Von Events bis Hotels
          und Messen habe ich die Verantwortung konsequent übernommen und habe
          dadurch auch den Gedanken entwickelt, mich selbstständig zu machen.
          Work2Gether ist für mich der Traum des perfekten Teams, das Kriterien
          wie Qualität, Loyalität und Teamgeist als Leitmotive verwendet.
          Zusammen mit meinem Team möchte ich die Erwartungen unserer Kunden
          übertreffen und einen bleibenden positiven Eindruck hinterlassen.
          Lasst uns zusammen großartiges Erreichen!{" "}
          <i>We rise by lifting others.</i>
        </Text>
      </GridItem>
      <GridItem paddingTop={9}>
        <Text fontSize={"2xl"} textDecoration={"underline"}>
          Apply to be a part of our team
        </Text>
        <Text paddingTop={3} fontSize={"large"}>
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
