import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

import styles from '../styles/NavigationBar.module.scss'

import Navlink from './navlink'
import SideBar from './sidebar/sidebar'

const variants = {
    exit: {
        opacity: 0,
        y: -30,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
        }
    },
    initial: {
        opacity: 0,
        y: -30,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    },
}

interface props {
    signal?: Function
}

const defaultProps: props = {
    signal: null
}

export default function NavigationBar({ signal }: props) {

    return (
        <motion.nav 
            exit='exit'
            initial='initial'
            animate='animate'
            variants={variants}
            className={styles.container}
        >
            <Link href='/' key='my-logo' scroll={false}>
                <a className={styles.logo}>
                    <Image
                        src='/logo.svg'
                        alt='My logo'
                        width={80}
                        height={80}
                    />
                </a>
            </Link>
            <div className={styles.navbar}>
                <Navlink content={['About', 'Projects', 'Contact']} />
            </div>
            <SideBar signal={signal} />
        </motion.nav>
    )
}

NavigationBar.defaultProps = defaultProps