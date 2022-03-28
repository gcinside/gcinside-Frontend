import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import SideBar from '../components/Sidebar/Sidebar'
import GlobalStyle from '../Styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyle}/>
      <SideBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
