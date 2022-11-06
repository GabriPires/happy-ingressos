import Head from 'next/head';
import { PAGE_HEADER_SUFFIX } from '../constants/title';
import {
  Container,
  DesktopContent,
  FormContainer,
} from '../styles/pages/promoter-signup';
import * as zod from 'zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormContent } from '../components/FormContent/FormContent';
import { TextInput } from '../components/TextInput/TextInput';
import { FormErrorMessage } from '../components/FormErrorMessage/FormErrorMessage';
import Link from 'next/link';
import { cnpjMask, cpfMask } from '../utils/documentsMasks';

const promoterSignUpFormSchema = zod.object({
  name: zod.string().min(1, 'Este campo não pode ser vazio'),
  email: zod.string().email('Digite um email válido'),
  password: zod.string().min(1, 'Este campo não pode ser vazio'),
  document: zod.string().min(14, 'Digite um CPF ou CNPJ válido'),
});

type PromoterSignUpFormData = zod.infer<typeof promoterSignUpFormSchema>;

export default function PromoterSignUp() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PromoterSignUpFormData>({
    resolver: zodResolver(promoterSignUpFormSchema),
    defaultValues: {
      document: '',
    },
  });

  const handleSignUp: SubmitHandler<PromoterSignUpFormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>{`Cadastre-se ${PAGE_HEADER_SUFFIX}`}</title>
      </Head>

      <Container>
        <FormContainer onSubmit={handleSubmit(handleSignUp)}>
          <h1>Cadastre-se e crie eventos!</h1>

          <FormContent>
            <TextInput type="text" placeholder="Nome" {...register('name')} />
            {errors.name && (
              <FormErrorMessage>{errors.name.message}</FormErrorMessage>
            )}
          </FormContent>

          <FormContent>
            <Controller
              control={control}
              name={'document'}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  type="text"
                  placeholder="CPF ou CNPJ"
                  value={value.length > 14 ? cnpjMask(value) : cpfMask(value)}
                  onChange={(e) => onChange(e.currentTarget.value)}
                />
              )}
            />
            {errors.document && (
              <FormErrorMessage>{errors.document.message}</FormErrorMessage>
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
