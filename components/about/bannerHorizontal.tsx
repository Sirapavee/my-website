import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'

import styles from 'styles/BannerHorizontal.module.scss'

const bannerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

export default function BannerVertical({ text }) {

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce : false,
    })

    const [bannerLeft1, setBannerLeft1] = useState(0)
    const bannerRef1 = useRef(null)

    const [bannerLeft2, setBannerLeft2] = useState(0)
    const bannerRef2 = useRef(null)

    const { scrollY } = useViewportScroll()
    const bannerX1 = useTransform(scrollY, [ bannerLeft1, bannerLeft1 + 1 ], [0, -0.26], {
        clamp: false
    })
    const bannerX2 = useTransform(scrollY, [ bannerLeft2, bannerLeft2 + 1 ], [0, 0.26], {
        clamp: false
    })

    useEffect(() => {
        const banner1 = bannerRef1.current
        setBannerLeft1(banner1.offsetLeft)

        const banner2 = bannerRef2.current
        setBannerLeft2(banner2.offsetLeft)
    }, [bannerRef1, bannerRef2])

    return (
        <motion.div 
                ref={ref}
                initial={'hidden'}
                animate={inView ? 'visible' : 'hidden'}
                variants={bannerVariants}
                className={styles.bannerContainer}
            >
                <motion.p 
                    ref={bannerRef1} 
                    style={{
                        x: bannerX1
                    }}
                    className={styles.banner1}
                >
                    {text}
                </motion.p>
                <motion.p 
                    ref={bannerRef2} 
                    style={{
                        x: bannerX2
                    }}
                    className={styles.banner2}
                >
                    {text}
                </motion.p>
            </motion.div>
    )
}