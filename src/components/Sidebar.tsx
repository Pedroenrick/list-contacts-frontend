import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            MENU
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Contatos
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
