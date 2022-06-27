import { Flex, Box, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Card } from './../../components/Card/index';


export default function Contacts() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" mw={1480} mx="auto"  p={["4","4","6"]}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["4","4","6"]} mx="auto">
          <SimpleGrid flex="1" gap="4" minChildWidth="380px" align="flex-start">
            <Card
              name="Pedroenrick Felizardo"
              phone="+55 32 9 84925186"
              email="pedro@email.com"
              image="data:image/jpeg;base64,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"
            />
            <Card
              name="Relampago Marquinhos"
              phone="+55 32 9 99999999"
              email="relampago@email.com"
              image="http://pm1.narvii.com/6328/a6652a0b54add3771f505a0588e72e3dae81fbca_00.jpg"
            />

            <Card
              name="Beatriz Pacheco"
              phone="+55 32 9 99999999"
              email="bia@email.com"
              image=""
            />

            <Card
              name="Beatriz Pacheco"
              phone="+55 32 9 99999999"
              email="bia@email.com"
              image=""
            />

            <Card
              name="Beatriz Pacheco"
              phone="+55 32 9 99999999"
              email="bia@email.com"
              image=""
            />

            <Card
              name="Beatriz Pacheco"
              phone="+55 32 9 99999999"
              email="bia@email.com"
              image=""
            />

            <Card
              name="Beatriz Pacheco"
              phone="+55 32 9 99999999"
              email="bia@email.com"
              image=""
            />
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}
