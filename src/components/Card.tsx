import { Box, Text, Stack, Avatar, HStack, Button, Icon } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

interface PropsCard {
  name: string;
  image?: string;
  email: string;
  phone: string;
}
export function Card({ name, image, email, phone }: PropsCard) {
  return (
    <Box p="8" bg="gray.900" borderRadius={8}>
      <Stack justify="space-between" align="center">
        <Box>
          <Avatar size="xl" name={name} src={image} />
        </Box>
        <HStack p="1">
          <Text fontSize="sm" color="gray.300">
            Nome:
          </Text>
          <Text fontSize="sm" mb="4">
            {name}
          </Text>
        </HStack>
        <HStack p="1">
          <Text fontSize="sm" color="gray.300">
            Telefone:
          </Text>
          <Text fontSize="sm" mb="4">
            {phone}
          </Text>
        </HStack>
        <HStack p="1">
          <Text fontSize="sm" color="gray.300">
            E-mail:
          </Text>
          <Text fontSize="sm" mb="4">
            {email}
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
}
