import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { Global, css } from '@emotion/react'
import SideBar from '../components/Sidebar/Sidebar'
import GlobalStyle from '../Styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div css={css`
      display: flex; 
      background-color: #F9F9F9; 
      `}>
      <Global styles={GlobalStyle}/>
      {router.pathname === '/' ? null : <SideBar />}
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
