import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

import styles from '../styles/navbar.module.scss'

import Navlink from './navlink'

export default function NavigationBar() {
    return (
        <div className={styles.container}>
            <Link href='/' key='my-logo'>
                <a className={styles.logo}>
                    <Image
                        src='/logo.svg'
                        alt='My logo'
                        width={80}
                        height={80}
                    />
                </a>
            </Link>
            <nav className={styles.navbar}>
                <Navlink content={['About', 'Projects', 'Contact']} />
            </nav>
        </div>
    )
}