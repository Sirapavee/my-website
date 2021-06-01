import Head from 'next/head'

import { motion } from 'framer-motion'
import { useState } from 'react'

import styles from '../styles/Contact.module.scss'

import NavigationBar from '../components/navbar'
import ContactSection from '../components/contact/contactComponent'

export default function Contact() {

    const [openStatus, setOpenStatus] = useState(false)

    const signalOpen = (status: boolean) => {
        setOpenStatus(status)
    }

    return (
        <motion.div
            exit={{
                opacity: 0,
            }}
            className={styles.container}
        >
            <Head>
                <title>Contact Me</title>
                <meta name="description" content="Contact me" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <NavigationBar signal={signalOpen} />
            <ContactSection status={openStatus} />
        </motion.div>
    )
}