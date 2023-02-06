import Link from 'next/link'
import { useRouter } from 'next/router'

import { motion } from 'framer-motion'

import styles from 'styles/Navlink.module.scss'

export default function Navlink({ content }) {

    const isPathMatchLink = (name: string) => {

        let currentPage: string = useRouter().pathname;
        
        let pathName: string = `/${name.toLowerCase()}`

        if (pathName === currentPage) {
            return true
        }

        return false
    }

    const hoverVariants = {
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

    return (
        <>
            {content.map((item: string) => {
                return (
                    isPathMatchLink(item) 
                    ?
                        <motion.div 
                            className={styles.inactiveLink} 
                            key={item}
                            whileHover='inactiveHover' 
                            whileTap='inactiveHover'
                            variants={hoverVariants}
                        >
                            {item}
                        </motion.div>
                    : 
                        <motion.div
                            key={item}
                            className={styles.navlink}
                            whileHover='whileHover' 
                            whileTap='whileHover'
                            variants={hoverVariants}
                        >
                            <Link href={`/${item.toLowerCase()}`} scroll={false}>
                                {item}
                            </Link>
                        </motion.div>
                )
            })}
        </>
    )
}