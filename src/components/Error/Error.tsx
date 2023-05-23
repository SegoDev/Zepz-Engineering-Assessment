import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import ExternalButton from '../ExternalButton/ExternalButton';

interface ErrorProps {
  title: string;
  message: string;
}

export default function Error({ title, message }: ErrorProps) {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      maxHeight={"100vh"}
      height={"100%"}
      mx="auto"
      top={"50%"}
      flexDir={"column"}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg={"red.500"}
        rounded={"50px"}
        w={"55px"}
        h={"55px"}
        textAlign="center"
      >
        <CloseIcon boxSize={"20px"} color={"white"} />
      </Flex>
      <Heading
        display="inline-block"
        as="h2"
        size="lg"
        bgGradient="linear(to-r, red.400, red.600)"
        backgroundClip="text"
        mt={6}
        mb={2}
        fontSize={["2xl", "3xl", "4xl"]}
      >
        {title}
      </Heading>
      <Text fontSize={["md", "lg", "xl"]} mt={2} mb={2}>
        {message}
      </Text>
      <ExternalButton />
      <Button
        onClick={() => window.location.reload()}
      >Reload Window</Button>
    </Flex>
  );
}