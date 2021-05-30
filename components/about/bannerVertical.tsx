import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'

import styles from '../../styles/BannerVertical.module.scss'

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
        threshold: 0.2,
        triggerOnce : false,
    })

    const [bannerTop1, setBannerTop1] = useState(0)
    const bannerRef1 = useRef(null)

    const [bannerTop2, setBannerTop2] = useState(0)
    const bannerRef2 = useRef(null)

    const { scrollY } = useViewportScroll()
    const bannerY1 = useTransform(scrollY, [ bannerTop1, bannerTop1 + 1 ], [0, -0.2], {
        clamp: false
    })
    const bannerY2 = useTransform(scrollY, [ bannerTop2, bannerTop2 + 1 ], [0, 0.2], {
        clamp: false
    })

    useEffect(() => {
        const banner1 = bannerRef1.current
        setBannerTop1(banner1.offsetTop)

        const banner2 = bannerRef2.current
        setBannerTop2(banner2.offsetTop)
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
                        y: bannerY1
                    }}
                    className={styles.banner1}
                >
                    {text}
                </motion.p>
                <motion.p 
                    ref={bannerRef2} 
                    style={{
                        y: bannerY2
                    }}
                    className={styles.banner2}
                >
                    {text}
                </motion.p>
            </motion.div>
    )
}