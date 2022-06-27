import {
  Flex,
  HStack,
  useBreakpointValue,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { Search } from "./Search";
import { useContext } from "react";
import { AuthContext } from "./../../contexts/AuthContext";

export function Header() {
  const { user } = useContext(AuthContext);

  const { onOpen } = useSidebarDrawer();

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isDesktop && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open Navigation"
          mr="2"
        />
      )}
      <Logo />
      {isDesktop && <Search />}

      <Flex align="center" ml="auto">
        <HStack
          spacing="4"
          mx="8"
          pr="8"
          py="5"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        />
        <Profile
          showProfileData={isDesktop}
          name={user?.name}
          email={user?.email}
        />
      </Flex>
    </Flex>
  );
}
