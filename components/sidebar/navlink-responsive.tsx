import Link from 'next/link'
import { useRouter } from 'next/router'

import { motion } from 'framer-motion'

import styles from 'styles/NavlinkResponsive.module.scss'

const isPathMatchLink = (name: string) => {

    let currentPage: string = useRouter().pathname;
    
    let pathName: string = `/${name.toLowerCase()}`

    if (pathName === currentPage) {
        return true
    }

    return false
}

const linkVariants = {
    opened: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            },
            staggerChildren: 0.07, 
            delayChildren: 0.2
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000
            },
            staggerChildren: 0.05, 
            staggerDirection: -1
        }
    },
    whileHover: {
        scale: 1.5,
    },
    inactiveHover: {
        scale: [1, 2, 2, 2, 2, 1],
        rotate: ['0deg', '25deg', '-25deg', '10deg', '-10deg', '0deg'],
        transition: {
            duration: .5,
        },
    }
}

const createLink = (name: string, isButtonOpen: boolean) => {
    
    return (
        <motion.div 
            data-is-opened={isButtonOpen}
            className={styles.navlinkResponsive}
            whileHover='whileHover' 
            whileTap='whileHover'
            variants={linkVariants}
        >
            <Link href={`/${name.toLowerCase()}`}>
                <a>
                    {name}
                </a>
            </Link>
        </motion.div>
    )
}

export const NavlinkResponsive = ({ content, isButtonOpen }) => (

    <>
        {content.map((item: string) => {
            return (
                isPathMatchLink(item) 
                ?
                    <motion.div 
                        key={item}
                        variants={linkVariants}
                    >
                        <motion.div 
                            data-is-opened={isButtonOpen}
                            className={styles.inactiveLinkResponsive} 
                            whileHover='inactiveHover' 
                            whileTap='inactiveHover'
                            variants={linkVariants}
                        >
                            {item}
                        </motion.div>
                    </motion.div>
                : 
                    <motion.div 
                        key={item}
                        variants={linkVariants}
                    >
                        {createLink(item, isButtonOpen)}
                    </motion.div>
            )
        })}
    </>
)