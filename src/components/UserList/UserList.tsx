import { User } from "../../lib/types";
import {
  Flex,
  Stack,
  Text,
  useToast,
  Container,
  Divider,
  Image,
  Button,
  SimpleGrid,
  Tooltip,
  useDisclosure,
  IconButton,
  Collapse,
  Box,
} from "@chakra-ui/react";
import { AddIcon,  ChevronDownIcon,  ChevronUpIcon,  MinusIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface UserListProps {
  users: User[];
}

interface ToggleState {
  [key: number]: boolean;
}

const UserList = ({ users }: UserListProps) => {
  const [followedUsers, setFollowedUsers] = useState<number[]>([]);
  const [blockedUsers, setBlockedUsers] = useState<number[]>([]);
  const [toggle, setToggle] = useState<ToggleState>({});
  const { isOpen, onToggle } = useDisclosure();

  const toast = useToast();

  const followUser = (user: User) => {
    const userIds = followedUsers;
    let addToUsers = true;

    userIds.forEach((userId, idx: number) => {
      if (userId === user.user_id) {
        userIds.splice(idx, 1);
        addToUsers = false;
        toast({
          title: "Unfollowed user",
          description: `${user.display_name} was removed from your following list`,
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
    });

    if (addToUsers) {
      userIds.push(user.user_id);
      toast({
        title: "Following user",
        description: `${user.display_name} was added to your follow list`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }

    setFollowedUsers([...userIds]);
    // to maintain the bookmarking store them in LocalStorage.
    // for porting to Native - AsyncStorage can be used, which provides
    // APIs very similar to Web.
    // https://react-native-async-storage.github.io/async-storage/docs/api
    localStorage.setItem("followedUsers", JSON.stringify(followedUsers));

    const localStore = localStorage.getItem(`followedUser: ${user.user_id}`);
    if (localStore == null) {
      localStorage.setItem(
        `followedUser: ${user.user_id}`,
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem(`followedUser: ${user.user_id}`);
    }
  };

  const blockUser = (user: User) => {
    const blockedIds = blockedUsers;
    let addToBlockedUsers = true;

    blockedIds.forEach((userId, idx: number) => {
      if (userId === user.user_id) {
        blockedIds.splice(idx, 1);
        addToBlockedUsers = false;
        toast({
          title: "Unblocked user",
          description: `${user.display_name} was removed from your blocked list`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });

    if (addToBlockedUsers) {
      blockedIds.push(user.user_id);
      toast({
        title: "Blocked user",
        description: `${user.display_name} was blocked successfully`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }

    setBlockedUsers([...blockedIds]);
    localStorage.setItem("blockedUsers", JSON.stringify(blockedUsers));

    const localStore = localStorage.getItem(`blockedUser: ${user.user_id}`);
    if (localStore == null) {
      localStorage.setItem(
        `blockedUser: ${user.user_id}`,
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem(`blockedUser: ${user.user_id}`);
    }
  };

  const isUserFollowed = (user: User) => {
    return followedUsers.includes(user.user_id);
  };

  const isUserBlocked = (user: User) => {
    return blockedUsers.includes(user.user_id);
  };

  const expandCell = (id: number) => {
    onToggle()
    setToggle((prev: { [key: number]: boolean }) => {
      return { ...prev, [id]: !prev[id] };
    });
  }

  return (
    <Container w={"100%"} maxW={"4xl"} px={{ base: 5, md: 12 }} margin="0 auto">
      {users.map((user, index) => (
        <Stack
          key={index}
          spacing={{ base: 0, md: 4 }}
          p={2}
          rounded="md"
          w={{ base: "auto", md: "100%" }}
          overflow="hidden"
          pos="relative"
        >
          <Divider my={4} color="gray.600" />

          {isUserFollowed(user) && !isUserBlocked(user) ? (
            <Flex
              alignItems="center"
              p={1}
              bg="green.500"
              pos="absolute"
              fontSize="xs"
              fontWeight="500"
              color="white"
              top={5}
              left={0}
            >
              <Text>Following</Text>
            </Flex>
          ) : null}
          <Stack
            gap={4}
            role="group"
            w="100%"
            alignItems="center"
            _hover={{ cursor: "pointer" }}
            direction={{ base: "column", md: "row" }}
            opacity={isUserBlocked(user) ? "40%" : "100%"}
            onClick={() => expandCell(user.user_id)}
          >
            <Flex
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex flexDir="row" gap={"4"}>
                <Image
                  w={{ base: "6rem", md: "4rem" }}
                  src={user.profile_image}
                  borderRadius={"md"}
                />
                <Flex flexDir={"column"}>
                  <Text fontSize="sm" fontWeight="bold" textColor="blue.500">
                    {user.display_name}
                  </Text>
                  <Text fontSize="xs" fontWeight="bold">
                    {user.location}
                  </Text>
                  <Text fontSize="xs" fontWeight="medium">
                    {user.reputation}
                  </Text>
                </Flex>
              </Flex>
              <Tooltip label="View more">
                <IconButton
                  aria-label="Toggle extra view"
                  onClick={onToggle}
                  variant={"ghost"}
                  icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                />
              </Tooltip>
            </Flex>
          </Stack>
          <Collapse in={toggle[user.user_id]} animateOpacity>
            {toggle[user.user_id] && (
              <Box p="40px" mt="4" rounded="md" shadow="md" bg="gray.100">
                {!isUserBlocked(user) && (
                  <>
                    <Text
                      fontSize={{ base: "xs", md: "md" }}
                      fontWeight="bold"
                      textColor="orange.500"
                      opacity={isUserBlocked(user) ? "40%" : "100%"}
                    >
                      User badge counts
                    </Text>
                    <SimpleGrid
                      columns={3}
                      spacing={5}
                      py={4}
                      pl={{ base: 0, md: 10 }}
                      margin="auto 0"
                      opacity={isUserBlocked(user) ? "40%" : "100%"}
                    >
                      {Object.entries(user.badge_counts).map(([key, value]) => (
                        <Stack
                          key={key}
                          pl={3}
                          py={1}
                          pr={1}
                          borderLeft="2px solid"
                          borderLeftColor="blue.400"
                          justifyContent="space-between"
                        >
                          <Text
                            fontSize={{ base: "xs", md: "md" }}
                            fontWeight="bold"
                            color="blue.400"
                          >
                            {value}
                          </Text>
                          <Text fontSize={{ base: "xs", md: "md" }}>{key}</Text>
                        </Stack>
                      ))}
                    </SimpleGrid>
                  </>
                )}
                <Stack
                  direction={"row"}
                  gap={2}
                  alignItems={{ base: "flex-start", sm: "center" }}
                  spacing={1}
                  mb={0}
                  mt={2}
                >
                  <Button
                    leftIcon={
                      isUserFollowed(user) ? (
                        <MinusIcon w={4} h={4} color="white" />
                      ) : (
                        <AddIcon w={4} h={4} color="white" />
                      )
                    }
                    colorScheme={isUserFollowed(user) ? "orange" : "green"}
                    onClick={() => followUser(user)}
                    isDisabled={isUserBlocked(user)}
                    size={{ base: "sm", md: "md" }}
                  >
                    {isUserFollowed(user) ? "Unfollow" : "Follow"}
                  </Button>
                  <Button
                    leftIcon={<WarningTwoIcon w={4} h={4} color="white" />}
                    colorScheme="red"
                    onClick={() => blockUser(user)}
                    size={{ base: "sm", md: "md" }}
                  >
                    {isUserBlocked(user) ? "Unblock" : "Block"}
                  </Button>
                </Stack>
              </Box>
            )}
          </Collapse>
        </Stack>
      ))}
    </Container>
  );
};

export default UserList;