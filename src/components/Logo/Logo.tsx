import { Heading } from "@chakra-ui/react";
import { openURLExternally } from "../../lib/utils";

const Logo = () => {
  return (
    <Heading
      display="inline-block"
      as={"h1"}
      size={{ base: 'sm', md: 'xl' }}
      bgGradient="linear(to-r, orange.400, orange.600)"
      backgroundClip="text"
      mt={6}
      mb={2}
      onClick={() => openURLExternally("https://stackoverflow.com/users")}
    >
      stackoverflow users
    </Heading>
  );
}
 
export default Logo;