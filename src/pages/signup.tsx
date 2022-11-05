import Head from 'next/head';
import { PAGE_HEADER_SUFFIX } from '../constants/title';
import {
  Container,
  DesktopContent,
  FormContainer,
} from '../styles/pages/signup';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormContent } from '../components/FormContent/FormContent';
import { TextInput } from '../components/TextInput/TextInput';
import { FormErrorMessage } from '../components/FormErrorMessage/FormErrorMessage';
import Link from 'next/link';

const signUpFormSchema = zod.object({
  name: zod.string().min(1, 'Este campo não pode ser vazio'),
  email: zod.string().email('Digite um email válido'),
  password: zod.string().min(1, 'Este campo não pode ser vazio'),
});

type SignUpFormData = zod.infer<typeof signUpFormSchema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  const handleSignUp: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>{`Cadastre-se ${PAGE_HEADER_SUFFIX}`}</title>
      </Head>

      <Container>
        <FormContainer onSubmit={handleSubmit(handleSignUp)}>
          <h1>Cadastre-se</h1>

          <FormContent>
            <TextInput type="text" placeholder="Nome" {...register('name')} />
            {errors.name && (
              <FormErrorMessage>{errors.name.message}</FormErrorMessage>
            )}
          </FormContent>

          <FormContent>
            <TextInput
              type="email"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormContent>

          <FormContent>
            <TextInput
              type="password"
              placeholder="Senha"
              {...register('password')}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormContent>

          <button>Cadastrar</button>

          <Link href={'/'}>Voltar para a página inicial</Link>
        </FormContainer>

        <DesktopContent>
          <h1>
            happy ingressos
            <br />
            :D
          </h1>
        </DesktopContent>
      </Container>
    </>
  );
}
