import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
interface NavSectionProps {
  title: string;
  children: ReactNode;
}
export function Navsection({ title, children }: NavSectionProps) {
  return (
    <Stack spacing="12" align="flex-start">
      <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">
          {title}
        </Text>
        <Stack spacing="4" mt="8" align="stretch">
          {children}
        </Stack>
      </Box>
    </Stack>
  );
}
