import type {NextPage} from 'next'
import Head from 'next/head'
import Wrapper from "../components/background/index";
import {css, Global} from '@emotion/react';

const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
`

const Home: NextPage = () => {
  return (
      <>
        <Global styles={GlobalStyle}/>
        <Head>
          <title>gcinside</title>
          <meta name="description" content="setting"/>
          <link rel="icon" href="#"/>
        </Head>
        <Wrapper/>
      </>
  )
}

export default Home
