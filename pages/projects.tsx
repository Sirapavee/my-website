import Head from 'next/head'

import { motion } from 'framer-motion'
import { useState } from 'react'

import styles from '../styles/Project.module.scss'

import NavigationBar from '../components/navbar'
import IndividualProject from '../components/project/renderProject'
import { PROJECTS } from '../data/projects'
import ScrollArow from '../components/scrollToTop'

export default function Project() {

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
                <title>My Projects</title>
                <meta name="description" content="My projects" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <NavigationBar signal={signalOpen} />
            
            {PROJECTS.map((item: any) => {
                return (
                    <IndividualProject 
                        key={item.id} status={openStatus}
                        keyword={item.id} img={item.img} 
                        imgAlt={item.alt} wide={item.width}
                        high={item.height} name={item.name}
                        tech={item.tech} date={item.date} 
                        desc={item.description} link={item.link} certificate={item.certificate}
                    />
                )
            })}
            <ScrollArow status={openStatus} />
        </motion.div>
    )
}