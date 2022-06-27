import { Flex, Button, Stack } from "@chakra-ui/react";
import { api } from "../services/api";
import { registerFormSchema } from "../validations/RegisterFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "../components/Form/Input";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const handleRegister: SubmitHandler<RegisterFormData> = async ({
    name,
    email,
    password,
  }) => {
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("email", email);
    params.append("password", password);

    await api
      .post("/register", params)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleRegister)}
      >
        <Stack spacing="4">
          <Input
            name="name"
            label="Nome"
            error={errors.name}
            {...register("name")}
          />
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            error={errors.password}
            label="Senha"
            {...register("password")}
          />

          <Input
            name="password_confirmation"
            type="password"
            error={errors.password_confirmation}
            label="Confirme a Senha"
            {...register("password_confirmation")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="blue"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
