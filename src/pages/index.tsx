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
        </Head>
      </>
  )
}

export default Home
