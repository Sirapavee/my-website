import Head from 'next/head'

import { motion } from 'framer-motion'

import styles from '../styles/Project.module.scss'

import NavigationBar from '../components/navbar'

export default function Project() {
    return (
        <motion.div
            exit={{
                opacity: 0,
            }}
            className={styles.container}
        >
            <Head>
                <title>My Projects</title>
                <meta name="description" content="My projects" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <NavigationBar />
        </motion.div>
    )
}