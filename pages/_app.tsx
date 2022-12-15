import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400'],
  style: ['normal'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className}`}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </div>
  )
}
