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
    <div className={styles.container}>
      <Head>
        <title>Sirapavee Portfolio</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <NavigationBar />

      <main className={styles.main}>
        <motion.div  
          initial="hidden" 
          animate="visible" 
          variants={variants}
        >
          <h1 className={styles.title}>
            I'm Sirapavee Ganyaporngul
          </h1>
          <h3 className={styles.subtitle}>
            A graduated CS student
          </h3>
        </motion.div>
      </main>
    </div>
  )
}
