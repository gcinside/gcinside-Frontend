import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import SideBar from '../components/Sidebar/Sidebar'
import GlobalStyle from '../Styles/GlobalStyle'
import { css } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div css={css`display: flex; background-color: #F9F9F9;`}>
      <Global styles={GlobalStyle}/>
      <SideBar />
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
