import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html, body {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}
