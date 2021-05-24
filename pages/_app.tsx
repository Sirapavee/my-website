import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp