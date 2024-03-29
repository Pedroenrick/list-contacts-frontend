import { Flex, Button, Stack } from "@chakra-ui/react";
import { loginFormSchema } from "../validations/LoginFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, SubmitHandler } from "react-hook-form";


import { Input } from "../components/Form/Input";
import { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {

  const {singIn} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async ({
    email,
    password,
  }) => singIn({email, password});

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
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
