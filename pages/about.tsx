import Head from 'next/head'

import { motion } from 'framer-motion'

import styles from 'styles/About.module.scss'

import NavigationBar from 'components/navbar'
import MySummary from 'components/about/mysummary'
import MyExperience from 'components/about/myExperience'
import MySkill from 'components/about/mySkills'

export default function About() {
    return (
        <motion.div
            exit={{
                opacity: 0,
            }}
            className={styles.container}
        >
            <Head>
                <title>About Me</title>
                <meta name="description" content="About me" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <NavigationBar />
            <MySummary />
            <MyExperience />
            <MySkill />
        </motion.div>
    )
}