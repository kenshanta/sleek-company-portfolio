import { useRouteError } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <Text>Sorry, an unexpected error has occurred. &nsbps; {error.statusText || error.message}
      </Text>
    </div>
  );
}
