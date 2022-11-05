import Head from 'next/head';
import { TextInput } from '../components/TextInput/TextInput';
import { PAGE_HEADER_SUFFIX } from '../constants/title';
import {
  Container,
  DesktopContent,
  FormContainer,
} from '../styles/pages/login';
import * as zod from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormErrorMessage } from '../components/FormErrorMessage/FormErrorMessage';
import { FormContent } from '../components/FormContent/FormContent';
import Link from 'next/link';
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../constants/routes';

const loginFormSchema = zod.object({
  email: zod
    .string()
    .email('Digite um email válido')
    .min(1, 'Este campo não pode ser vazio'),
  password: zod.string().min(1, 'Este campo não pode ser vazio'),
});

type LoginFormData = zod.infer<typeof loginFormSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>{`Login ${PAGE_HEADER_SUFFIX}`}</title>
      </Head>

      <Container>
        <FormContainer onSubmit={handleSubmit(handleLogin)}>
          <h1>Faça seu acesso</h1>
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
          <button>Entrar</button>

          <Link href={LOGIN_ROUTE}>Esqueceu sua senha?</Link>

          <span>
            Não tem uma conta? <Link href={SIGNUP_ROUTE}>Cadastre-se</Link>
          </span>
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
