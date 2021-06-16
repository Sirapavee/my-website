import Image from 'next/image'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import styles from '../styles/ScrollArrow.module.scss'

interface props {
    status: boolean,
}

const scrollVariants = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
            duration: 1,
        }
    },
    closed: {
        opacity: 0,
        scale: 0.5,
    },
    visibleResponsive: {
        opacity: 1,
        scale: 1,
        zIndex: 2,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
            duration: 1,
        }
    },
    closedResponsive: {
        opacity: 0,
        scale: 0.5,
        zIndex: 0
    },
}

const containerVariants = {
    visible: {
        opacity: 1,
        scale: 1
    },
    closed: {
        opacity: 0,
        scale: 1
    },
    visibleResponsive: {
        opacity: 1,
        scale: 1,
        zIndex: 2,
    },
    closedResponsive: {
        opacity: 0,
        scale: 1,
        zIndex: 0
    },
}

export default function ScrollArrow({ status }: props) {

    const [scrollVisible, setScrollVisible] = useState(false)
    const [width, setWidth] = useState(0)
    const [isResponsive, setIsResponsive] = useState(false)

    const checkScrollTop = () => {
        if (!scrollVisible && window.pageYOffset > 600) {
            setScrollVisible(true)
        }
        else if (scrollVisible && window.pageYOffset <= 600) {
            setScrollVisible(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const zIndexSwap = () => {
        if (isResponsive) {
            if (!status) {
                if (scrollVisible) {
                    return 'visibleResponsive'
                }
                else {
                    return 'closedResponsive'
                }
            }
            else {
                return 'closedResponsive'
            }
        }
        else {
            if (scrollVisible) {
                return 'visible'
            }
            else {
                return 'closed'
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)

        setWidth(window.innerWidth)

        if (width <= 769) {
            setIsResponsive(true)
        }
        else if (width > 769) {
            setIsResponsive(false)
        }

        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop);
        }
    }, [scrollVisible, width, isResponsive])

    return (
        <motion.div 
            className={styles.container}
            initial={status ? 'closedResponsive' : 'closed'}
            animate={zIndexSwap()}
            variants={containerVariants}
        >
            <motion.div
                onClick={scrollTop}
                className={styles.scrollTop}
                data-visible={scrollVisible}
                initial={status ? 'closedResponsive' : 'closed'}
                animate={zIndexSwap()}
                variants={scrollVariants}
            >
                <Image
                    src={'/arrow.svg'}
                    alt={'scroll to top button'}
                    width={50}
                    height={50}
                    quality={80}
                />
            </motion.div>
        </motion.div>
    )
}