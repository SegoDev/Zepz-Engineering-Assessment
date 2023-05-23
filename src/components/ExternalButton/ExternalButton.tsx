import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { openURLExternally } from "../../lib/utils";

 const ExternalButton = () => {
  return (
    <Button
      colorScheme="teal"
      onClick={() => openURLExternally("https://cors-anywhere.herokuapp.com/")}
      size={["lg", "md"]}
      leftIcon={<ExternalLinkIcon />}
    >
      Request server access
    </Button>
  );
}
 
export default ExternalButton;