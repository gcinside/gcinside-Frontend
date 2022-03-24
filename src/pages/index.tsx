/** @jsxImportSource @emotion/react */
import type {NextPage} from 'next'
import Head from 'next/head'
import { css } from '@emotion/react'

const style = css({
  color: 'hotpink',
})

const Home: NextPage = () => {
  return (
      <>
        <Head>
          <title>setting</title>
          <meta name="description" content="setting"/>
          <link rel="icon" href="#"/>
          <div css={style}>
            emotionJS 테스트
          </div>
        </Head>
      </>
  )
}

export default Home
