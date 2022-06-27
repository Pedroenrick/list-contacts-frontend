import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória').min(6, 'Senha deve ter no mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Senhas não conferem')
});