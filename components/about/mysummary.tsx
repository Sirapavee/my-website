import Image from 'next/image'

import { useState, useRef, useEffect } from "react"
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import styles from '../../styles/MySummary.module.scss'

import HintNavigation from '../../components/hintNav'

const circleVariants1 = {
    initial: {
        y: -50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'inertia',
            velocity: 70,
        }
    }
}

const circleVariants2 = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: -50,
        opacity: 1,
        transition: {
            type: 'inertia',
            velocity: 20,
        }
    }
}

const portraitVariants = {
    initial: {
        opacity: 0,
        scale: 0.4
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.5,
        }
    }
}

const summaryVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
        }
    }
}

export default function MySummary() {

    const [floatCircleTop1, setfloatCircleTop1] = useState(0)
    const floatCircleRef1 = useRef(null)

    const [floatCircleTop2, setfloatCircleTop2] = useState(0)
    const floatCircleRef2 = useRef(null)

    const { scrollY } = useViewportScroll()
    const floatCircleY1 = useTransform(scrollY, [floatCircleTop1, floatCircleTop1 + 1], [0, -0.18], {
        clamp: false
    })
    const floatCircleY2 = useTransform(scrollY, [floatCircleTop2, floatCircleTop2 + 1], [0, -0.2], {
        clamp: false
    })

    useEffect(() => {
        const element1: any = floatCircleRef1.current
        setfloatCircleTop1(element1.offsetTop)

        const element2: any = floatCircleRef2.current
        setfloatCircleTop2(element2.offsetTop)
    }, [floatCircleRef1, floatCircleRef2])

    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: false,
    })

    return (
        <section className={styles.container}>
            <motion.span 
                initial={'initial'}
                animate={'animate'}
                variants={circleVariants1}
                style={{
                    y: floatCircleY1,
                }}
                ref={floatCircleRef1}
                className={styles.floatCircleProp1} 
            />
            <motion.span 
                initial={'initial'}
                animate={'animate'}
                variants={circleVariants2} 
                style={{
                    y: floatCircleY2,
                }}
                ref={floatCircleRef2} 
                className={styles.floatCircleProp2} 
            />

            <div className={styles.contentContainer}>
                <motion.span 
                    ref={ref}
                    initial={'initial'}
                    animate={inView ? 'animate' : 'initial'}
                    variants={portraitVariants} 
                    className={styles.profileFrame}
                >
                    <Image
                        src='/my_portrait_square.jpg'
                        alt='My portrait'
                        width={300}
                        height={300}
                        quality={100}
                    />
                </motion.span>
                <motion.article 
                    ref={ref}
                    initial={'initial'}
                    animate={inView ? 'animate' : 'initial'}
                    variants={summaryVariants} 
                    className={styles.profileSummary}
                >
                    <h1 id='summary' className={styles.title}>
                        About Me
                    </h1>
                    <p className={styles.summary}>
                        Hello, I'm Sirapavee Ganyaporngul: a recently graduated CS student from Chulalongkorn University and a freelance translator. 
                        I love to create a fluid website with animation and beautiful UX/UI in it, which users can have fun interact with it.
                        You can find my CV and Github profile on the contact page.
                    </p>
                    <p className={styles.summary}>
                        I've learned about Algorithms, Image Processing, CV, DL, and ML throughout four years of study. 
                        My senior project is airplane shadow removal using GANs, which I presented at ICIEA 2021 and newly published on the IEEE Explore website.
                    </p>
                    <p className={styles.summary}>
                        However, I currently interest in the Front-end part of web development. 
                        The motivation is I love a fluid website design, which has good looking and UX/UI. 
                        So that is the reason that encourages me to get on this path. 
                        In the future, I'm looking forward to being a professional in the front-end role in the web design industry.
                    </p>
                </motion.article>
            </div>
            <HintNavigation />
        </section>
    )
}