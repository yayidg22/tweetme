import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Container, Logo } from '@/styles/home.module'
import 'animate.css';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>TweetMe</title>
      </Head>
      <Container>
        <Logo
          className='animate__animated animate__pulse animate__infinite'
          src="/images/logo.png"
          alt="Logo"
          width={120}
          height={100}
          priority
        />
      </Container>
    </Fragment>
  )
}

Home.requiresAuth = true;

export default Home