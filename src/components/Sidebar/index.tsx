import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine,RiUserAddLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { Navsection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Navsection title="MENU">
            <NavLink icon={RiContactsLine}>Contacts</NavLink>
            <NavLink icon={RiUserAddLine}>Novo Contato</NavLink>
        </Navsection>
      </Stack>
    </Box>
  );
}
