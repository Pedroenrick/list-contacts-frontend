import * as yup from "yup";

export const contactsFormSchema = yup.object().shape({
    name: yup.string('Nome inválido').required('Nome obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    photo: yup.string(),
    group: yup.string(),
    ddd: yup.string().required('DDD obrigatório').max(2, 'DDD inválido').min(2, 'DDD inválido'),
    phone_number: yup.string(9).required('Telefone obrigatório').max(9, 'Telefone inválido').min(9, 'Telefone inválido'),
    city: yup.string().required('Cidade obrigatória'),
    state: yup.string().required('Estado obrigatório').max(2, 'Estado inválido').min(2, 'Estado inválido'),
    neighborhood: yup.string().required('Bairro obrigatório'),
    street: yup.string().required('Rua obrigatória'),
    number: yup.string().required('Número obrigatório'),
    complement: yup.string(),
    cep: yup.string().required('CEP obrigatório').max(8, 'CEP inválido').min(8, 'CEP inválido'),
})