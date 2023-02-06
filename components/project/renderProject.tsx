import Image from 'next/image'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import styles from 'styles/IndividualProject.module.scss'
import HintNavigation from 'components/hintNav'

interface props {
    status: boolean,
    keyword: string,
    img: string,
    imgAlt: string,
    wide: number,
    high: number,
    name: string,
    tech: string,
    date: string,
    desc: string,
    link: string,
    certificate: string
}

const sectionVariants = {
    visible: {
        transition: {
          staggerChildren: 0.3, 
          delayChildren: 0.2
        }
    },
    hidden: {
        transition: {
            staggerChildren: 0.05, 
            staggerDirection: -1
        }
    }
}

const midVerticalLineVariants = {
    hidden: {
        height: 0,
        opacity: 0,
    },
    visible: {
        height: '60%',
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
            duration: 0.5,
        }
    }
}

const midHorizontalLineVariants = {
    hidden: {
        width: 0,
        opacity: 0,
    },
    visible: {
        width: '80%',
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
            duration: 0.5,
        }
    }
}

const imageVariants = {
    hidden: {
        x: 0,
        opacity: 0,
    },
    visible: {
        x: -20,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
            delay: 1,
        }
    },
    hiddenResponsive: {
        y: 0,
        opacity: 0,
        zIndex: 0,
    },
    visibleResponsive: {
        y: -10,
        opacity: 1,
        zIndex: 2,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
            delay: 1,
        }
    }
}

const detailBoxVariants = {
    hidden: {
        x: 0,
        opacity: 0,
    },
    visible: {
        x: 20,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
            delay: 1,
        }
    },
    hiddenResponsive: {
        y: 0,
        opacity: 0,
        zIndex: 0,
    },
    visibleResponsive: {
        y: 10,
        opacity: 1,
        zIndex: 2,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
            delay: 1,
        }
    }
}

export default function IndividualProject({ status, keyword, img, imgAlt, wide, high, name, tech, date, desc, link, certificate }: props) {
    
    const [width, setWidth] = useState(0)
    const [isVertical, setIsVertical] = useState(false)
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce : false,
    })

    useEffect(() => {
        setWidth(window.innerWidth)

        if (width <= 769) {
            setIsVertical(true)
        }
        else if (width > 769) {
            setIsVertical(false)
        }
    }, [width, isVertical])

    const zIndexSwap = () => {

        if (inView) {
            if (isVertical) {
                if (!status) {
                    return 'visibleResponsive'
                }
                else {
                    return 'hiddenResponsive'
                }
            }
            else {
                return 'visible'
            }
        }
        else {
            if (isVertical) {
                return 'hiddenResponsive'
            }
            else {
                return 'hidden'
            }
        }

    }

    const shouldBeHidden = () => {

        if (inView) {
            if (!status) {
                return 'visible'
            }
            else {
                return 'hidden'
            }
        }
        else {
            return 'hidden'
        }

    }

    return (
        <motion.section
            ref={ref}
            key={keyword}
            initial='hidden'
            animate={shouldBeHidden()}
            variants={sectionVariants}
            className={styles.projectContainer}
        >
            <motion.section 
                className={styles.imageContainer}
                initial={isVertical ? 'hiddenResponsive' : 'hidden'}
                animate={zIndexSwap()}
                variants={imageVariants}
            >
                <Image
                    src={img}
                    alt={imgAlt}
                    width={wide}
                    height={high}
                    quality={100}
                />
            </motion.section>
            <motion.div className={styles.midVerticalLine} variants={midVerticalLineVariants} />
            <motion.div className={styles.midHorizontalLine} variants={midHorizontalLineVariants} />
            <motion.section 
                className={styles.detailContainer}
                initial={isVertical ? 'hiddenResponsive' : 'hidden'}
                animate={zIndexSwap()}
                variants={detailBoxVariants}
            >
                <header className={styles.header}>
                    {name}
                </header>
                <div className={styles.coreDetail}>
                    <p className={styles.tech}>
                        {tech}
                    </p>
                    <div className={styles.divLine} />
                    <p className={styles.date}>
                        {date}
                    </p>
                </div>
                <p className={styles.description}>
                    {desc}
                </p>
                <p 
                    className={styles.link} 
                    data-containlink={link ? 'hasLink' : 'noLink'}
                >
                    Link to this project: &nbsp; <a href={link} target='_blank'>Here</a>
                </p>
                <p 
                    className={styles.link} 
                    data-containlink={certificate ? 'hasLink' : 'noLink'}
                >
                    Certificate: &nbsp; <a href={certificate} target='_blank'>Here</a>
                </p>
            </motion.section>
            <HintNavigation id={keyword} />
        </motion.section>
    )
}