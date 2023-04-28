import Head from 'next/head'
import { Fragment } from 'react'
import { Container, FormContainer, Line, Logo, Row } from '@/styles/login.module.ts'
import { ButtonIcon, FieldError, StyledButton, StyledButtonSecondary, StyledInput, StyledLink } from '@/styles/Global'
import queryString from 'query-string'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler, } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupService } from '@/api/auth'
import { useAuth } from '@/contexts/auth'
import LoadingScreen from '@/components/LoadingScreen'

const FormSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(4, { message: "A minimum 4 characters password are required" }),
}).required();
type FormDataType = z.infer<typeof FormSchema>;

const SignUp = () => {
  const router = useRouter()
  const { restoreSession, isLoading } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm<FormDataType>({
    resolver: zodResolver(FormSchema)
  });

  const onSubmit: SubmitHandler<FormDataType> = data => handleSignUp(data)

  const handleGithubSignIn = () => {
/*     const params = queryString.stringify({
      client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      redirect_uri: 'http://localhost:3000',
      scope: ['read:user', 'user:email'].join(' '),
      allow_signup: true,
    });
    window.location.href = `https://github.com/login/oauth/authorize?${params}`;
 */  }

  const handleSignUp = async (props: FormDataType) => {
    try {
      const response = await signupService({
        email: props.email,
        name: props.fullName,
        password: props.password,
      });
      if (response.ok) {
        typeof restoreSession === 'function' && restoreSession(response.data.token);
        router.push('/');
      }
    } catch (error) {
      alert('error')
    }
  }

  if (isLoading) return <LoadingScreen />

  return (
    <Fragment>
      <Head>
        <title>SignUp - TweetMe</title>
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
          <h1>Sign Up to TweetMe</h1>
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
          <StyledInput id="fullName" type="text" placeholder='Full name' {...register("fullName", { required: true, })} />
          <FieldError>{errors.fullName?.message}</FieldError>
          <br />
          <StyledInput id="email" type='email' placeholder='Email' {...register("email", { required: true })} />
          <FieldError>{errors.email?.message}</FieldError>
          <br />
          <StyledInput id="password" type='password' placeholder='Password' {...register("password", { required: true })} />
          <FieldError>{errors.password?.message}</FieldError>
          <br />
          <StyledButton onClick={handleSubmit(onSubmit)}>Next</StyledButton>
          <br />
          <StyledButtonSecondary onClick={() => router.push('/signin')}>Back</StyledButtonSecondary>
        </FormContainer>
      </Container>
    </Fragment>
  )
}

export default SignUp