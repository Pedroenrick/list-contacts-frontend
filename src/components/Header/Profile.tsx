import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
  name: string;
  email: string;
  photo?: string;
}

export function Profile({
  name,
  email,
  photo,
  showProfileData = true,
}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{name}</Text>
          <Text color="gray.300" fontSize="small">
            {email}
          </Text>
        </Box>
      )}

      <Avatar size="md" name={name} src={photo} />
    </Flex>
  );
}
