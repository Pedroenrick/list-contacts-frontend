import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiUserAddLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { Navsection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <Navsection title="MENU">
        <NavLink href="/contacts" icon={RiContactsLine}>Contatos</NavLink>
        <NavLink href="/contacts/create" icon={RiUserAddLine}>Novo Contato</NavLink>
      </Navsection>
    </Stack>
  );
}
