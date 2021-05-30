import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import styles from '../../styles/MyExperience.module.scss'

import BannerVertical from './bannerVertical'
import { EXPERIENCES } from '../../data/experiences'

const gridContainerVariants = {
    visible: {
        transition: {
          staggerChildren: 0.3, 
          delayChildren: 0.2
        }
    },
    hidden: {
        transition: {
            staggerChildren: 0.05, staggerDirection: -1
        }
    }
}

const gridItemVariants = {
    hidden: {
        scale: 0.4,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000
            }
        }
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            y: {
                stiffness: 1000, 
                velocity: -100
            }
        }
    }
}

const underLineColor = ['#F72585', '#7209B7', '#3A0CA3', '#4361EE', '#4CC9F0']

export default function MyExperience() {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce : false,
    })

    const style = (index: number) => {
        return {
            textDecoration: 'underline', textDecorationColor: `${underLineColor[index]}`
        }
    }

    return (
        <section className={styles.container}>
            <BannerVertical text={'Experience'} />
            <motion.div
                ref={ref}
                initial={'hidden'}
                animate={inView ? 'visible' : 'hidden'}
                variants={gridContainerVariants}
                className={styles.expGrid}
            >
                {EXPERIENCES.map((exp: any) => {
                    return (
                        <motion.li
                            key={exp.id}
                            variants={gridItemVariants}
                            className={styles.gridItem}
                        >
                            <h2 
                                className={styles.elementTitle}
                                style={style(parseInt(exp.id)-1)}
                            >
                                {exp.title}
                            </h2>
                            <h4 className={styles.elementSubtitle}>
                                {exp.period}, {exp.for}
                            </h4>
                            <p className={styles.elementDescription}>
                                {exp.description}
                            </p>
                        </motion.li>
                    )
                })}
            </motion.div>
        </section>
    )
}