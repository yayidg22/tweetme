import Head from 'next/head'
import { Fragment, useState } from 'react'
import { Container, FormContainer, Line, Logo, Row } from '@/styles/login.module.ts'
import { ButtonIcon, StyledButton, StyledButtonSecondary, StyledInput, StyledLink } from '@/styles/Global'
import queryString from 'query-string'
import CheckRender from '@/components/CheckRender'

export default function SignIn() {
  const [isNextClicked, setIsNextClicked] = useState<boolean>(false)

  const handleNextClick = () => {
    if (isNextClicked) {
  
    } else {
      setIsNextClicked(true)
    }
  }

  const sumStrings = (a: string, b: string) => `${a} ${b}`;
  
  const handleGithubSignIn = () => {
    const params = queryString.stringify({
      client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      redirect_uri: 'http://localhost:3000',
      scope: ['read:user', 'user:email'].join(' '),
      allow_signup: true,
    });
    window.location.href = `https://github.com/login/oauth/authorize?${params}`;
  }
  
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

          <StyledInput type="email" placeholder='Email' />
          <br />
          <CheckRender allowed={isNextClicked}>
            <StyledInput type="password" placeholder='Password' />
          </CheckRender>
          <br />
          <StyledButton onClick={handleNextClick}>Next</StyledButton>
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

