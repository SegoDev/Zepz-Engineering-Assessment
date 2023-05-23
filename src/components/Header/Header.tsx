import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  HStack,
  VStack,
  CloseButton
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../Logo/Logo";
import ExternalButton from "../ExternalButton/ExternalButton";

const Header = () => {
  const mobileNav = useDisclosure();

  return (
    <>
      <Box
        bg="gray.200"
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
        alignItems={"center"}
        zIndex={100}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<HamburgerIcon />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg="gray.100"
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <ExternalButton />
              </VStack>
            </Box>
            <Logo />
          </HStack>
          <Box display={{ base: "none", md: "inline-block" }}>
            <ExternalButton />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Header;