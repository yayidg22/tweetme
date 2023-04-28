import Head from 'next/head'
import { Fragment, useState, MouseEvent, useEffect } from 'react'
import { Container, FormContainer, Line, Logo, Row } from '@/styles/login.module.ts'
import { ButtonIcon, FieldError, StyledButton, StyledButtonSecondary, StyledInput, StyledLink } from '@/styles/Global'
import queryString from 'query-string'
import CheckRender from '@/components/CheckRender'
import { useAuth } from '@/contexts/auth'
import LoadingScreen from '@/components/LoadingScreen'
import { useRouter } from 'next/router'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler, } from "react-hook-form";

const FormSchema = z.object({
  email: z.string().email({ message: "Insert valid email address" }),
  password: z.string().min(1, { message: "Password are required" }),
}).required();
type FormDataType = z.infer<typeof FormSchema>;

export default function SignIn() {
  const router = useRouter()
  const { signIn, isLoading, isAuthenticated } = useAuth();

  const { register, handleSubmit, getFieldState, getValues, formState: { errors } } = useForm<FormDataType>({
    resolver: zodResolver(FormSchema)
  });

  const onSubmit: SubmitHandler<FormDataType> = data => handleSignIn(data)


  const handleGithubSignIn = () => {
   /*  const params = queryString.stringify({
      client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      redirect_uri: 'http://localhost:3000',
      scope: ['read:user', 'user:email'].join(' '),
      allow_signup: true,
    });
    window.location.href = `https://github.com/login/oauth/authorize?${params}`; */
  }

  const handleSignIn = async (props: FormDataType) => {
    try {
      await signIn(
        props.email,
        props.password
      )
    } catch (error) {
      alert('error')
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated])

  if (isLoading || isAuthenticated) return <LoadingScreen />

  return (
    <Fragment>
      <Head>
        <title>SignIn - TweetMe</title>
      </Head>
      <Container>
        <Logo
          src="/images/logo.png"
          alt="Logo"
          width={50}
          height={40}
          priority
        />
        <FormContainer>
          <h1>Sign In to TweetMe</h1>
          <br />
          <StyledButton onClick={handleGithubSignIn}>
            <ButtonIcon
              src="/images/github.png"
              alt="Logo"
              width={16}
              height={16}
            />
            Sign In with Github
          </StyledButton>
          <Row>
            <Line />
            <span style={{ margin: 15 }}>
              or
            </span>
            <Line />
          </Row>
          <StyledInput id="email" type='email' placeholder='Email' {...register("email", { required: true })} />
          <FieldError>{errors.email?.message}</FieldError>
          <br />
          <CheckRender allowed={getValues("email")?.length > 0 && !getFieldState("email").invalid}>
            <StyledInput type="password" placeholder='Password' id="password"  {...register("password", { required: true })} />
          </CheckRender>
          <br />
          <StyledButton onClick={handleSubmit(onSubmit)}>Next</StyledButton>
          <br />
          <StyledButtonSecondary>Forgot password?</StyledButtonSecondary>
          <br />
          <br />
          <span>
            Don't have an account? <StyledLink href={"/signup"}>Sign up</StyledLink>
          </span>
        </FormContainer>
      </Container>
    </Fragment>
  )
}

