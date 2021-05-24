import Head from 'next/head'

import { motion } from 'framer-motion'

import styles from '../styles/Home.module.scss'

import NavigationBar from '../components/navbar'

export default function Home() {
  
  const variants = {
    hidden: {
      scale: .6,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: .4
      }
    },
  }

  return (
    <motion.div 
      exit={{
        opacity: 0,
      }} 
      className={styles.container}
    >
      <Head>
        <title>Sirapavee</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <NavigationBar />

      <motion.main  
        initial="hidden" 
        animate="visible" 
        variants={variants}
        className={styles.main}
      >
        <h1 className={styles.title}>
          I'm Sirapavee Ganyaporngul
        </h1>
        <h3 className={styles.subtitle}>
          A graduated CS student
        </h3>
      </motion.main>

      <motion.footer 
        initial="hidden" 
        animate="visible" 
        variants={variants}
        className={styles.footer}
      >
        <p className={styles.copyright}>&copy; 2021 Sirapavee</p>
      </motion.footer>
    </motion.div>
  )
}
