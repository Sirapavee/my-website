import { motion } from 'framer-motion'

import styles from 'styles/TransitionBackground.module.scss'

const blackBox = {
    initial: {
        height: '100vh',
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            when: "afterChildren",
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    }
}

const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            duration: 0.25,
            when: "afterChildren",
        },
    },
}

const text = {
    initial: {
        y: 40,
    },
    animate: {
        y: 80,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
}

export default function TransitionBackground() {
    return (
        <div className={styles.container}>
            <motion.div
                initial='initial'
                animate='animate'
                variants={blackBox}
                className={styles.blackBg}
            >
                <motion.svg className={styles.svg} variants={textContainer}>
                    <pattern
                        id="pattern"
                        patternUnits="userSpaceOnUse"
                        width={750}
                        height={800}
                        className={styles.pattern}
                    >
                        <rect className={styles.rectContainer} />
                        <motion.rect 
                            className={styles.rectMotion} 
                            variants={text} 
                        />
                    </pattern>
                    <text
                        className={styles.text}
                        text-anchor="middle"
                        x="50%"
                        y="50%"
                        style={{ fill: "url(#pattern)" }}
                    >
                        Sense
                    </text>
                </motion.svg>
            </motion.div>
        </div>
    )
}