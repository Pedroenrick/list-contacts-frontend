import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from "@chakra-ui/react";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header/index";
import { Sidebar } from "../../components/Sidebar/index";

export default function CreateContact() {
  return (
    <Box>
      <Header />
      <Flex w="80%" my="6" mw={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Novo Contato
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <Heading size="md" mb="3" fontWeight="bold">
              Dados pessoais
            </Heading>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome" />
              <Input name="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="photo" type="file" label="imagem" />
              <Input name="category" label="Grupo" />
            </SimpleGrid>

            <Divider my="6" borderColor="gray.700" />
            <Heading size="md" fontWeight="bold">
              Telefones
            </Heading>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="ddd" label="DDD" />
              <Input name="number" label="Numero" />
            </SimpleGrid>

            <Divider my="6" borderColor="gray.700" />
            <Heading size="md" fontWeight="bold">
              Endereço
            </Heading>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="zipcode" label="CEP" />
              <Input name="city" label="Cidade" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="street" label="Logradouro" />
              <Input name="neighborhood" label="Bairro" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="number" label="Numero" />
              <Input name="complement" label="Complemento" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="space-between">
            <HStack>
              <Button colorScheme="whiteAlpha">Cancelar</Button>
            </HStack>

            <HStack>
              <Button colorScheme="blue">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
