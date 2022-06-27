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

import Link from "next/link";

import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";
import { Header } from "../../components/Header/index";
import { Sidebar } from "../../components/Sidebar/index";
import { useEffect, useState } from "react";
import { api } from "./../../services/api";
import { useContext } from "react";
import { AuthContext } from "./../../contexts/AuthContext";
import { contactsFormSchema } from "./../../validations/ContactFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  image: string;
  group: string;
};

export default function CreateContact() {
  const { singIn } = useContext(AuthContext);
  const [zipcode, setZipcode] = useState("");
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    api
      .get("/categories")
      .then((response) => {
        setGroups(response.data);
      })
      .catch((error) => {});
  }, []);

  console.log(groups);
  // function searchAddress(zipcode) {
  //   if (zipcode.length == 8) {
  //     api.post("addresses/getAddress", zipcode).then((res) => {
  //       console.log(res.data);
  //     });
  //   }
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({ resolver: yupResolver(contactsFormSchema) });

  const handleCreateContact: SubmitHandler<ContactFormData> = async ({
    name,
    email,
    photo,
    group,
    ddd,
    phone_number,
    city,
    state,
    neighborhood,
    street,
    number,
    complement,
    cep,
  }) => {
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("email", email);
    params.append("photo", photo);
    params.append("group", group);
    params.append("ddd", ddd);
    params.append("phone_number", phone_number);
    params.append("city", city);
    params.append("state", state);
    params.append("neighborhood", neighborhood);
    params.append("street", street);
    params.append("number", number);
    params.append("complement", complement);
    params.append("cep", cep);

    try {
      console.log(params);
      const response = await api.post("/contacts", params);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(handleCreateContact)}>
      <Header />
      <Flex w="100%" my="6" mw={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Novo Contato
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["6", "8"]}>
            <Heading size="md" mb="3" fontWeight="bold">
              Dados pessoais
            </Heading>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                label="E-mail"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="photo"
                type="file"
                label="imagem"
                error={errors.photo}
                {...register("photo")}
              />
              <Select
                mt="8"
                placeholder="Categoria"
                size="lg"
                error={errors.group}
                {...register("group")}
              >
                {groups.map((group) => (
                  <option key={group.id} value={group.id} color="black">
                    {group.name}
                  </option>
                ))}
              </Select>
            </SimpleGrid>

            <Divider my="6" borderColor="gray.700" />
            <Heading size="md" fontWeight="bold">
              Telefones
            </Heading>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="ddd"
                label="DDD"
                error={errors.ddd}
                {...register("ddd")}
              />
              <Input
                name="number"
                label="Numero"
                error={errors.phone_number}
                {...register("phone_number")}
              />
            </SimpleGrid>

            <Divider my="6" borderColor="gray.700" />
            <Heading size="md" fontWeight="bold">
              Endereço
            </Heading>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="city"
                label="Cidade"
                error={errors.city}
                {...register("city")}
              />
              <Input
                name="zipcode"
                label="CEP"
                error={errors.zipcode}
                {...register("zipcode")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="street"
                label="Logradouro"
                error={errors.street}
                {...register("street")}
              />
              <Input
                name="neighborhood"
                label="Bairro"
                error={errors.neighborhood}
                {...register("neighborhood")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="number"
                label="Numero"
                error={errors.number}
                {...register("number")}
              />
              <Input name="complement" label="Complemento" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack>
              <Link href="/contacts" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                colorScheme="blue"
                type="submit"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
