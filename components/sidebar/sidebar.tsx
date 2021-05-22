import { useLayoutEffect, useRef } from 'react'

import { motion, useCycle } from 'framer-motion'
import { ToggleButton } from './togglebutton'

import styles from '../../styles/sidebar.module.scss'

import { NavlinkResponsive } from './navlink-responsive'

const sidebar = {
    opened: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 93.5vw 5.5vh)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: 'circle(25px at 93.5vw 5.5vh)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40
        }
    }
}

const useDimensions = (ref: any) => {
    const dimensions = useRef({
        width: 0,
        height: 0
    })

    useLayoutEffect(() => {
        dimensions.current.width = ref.current.offsetWidth
        dimensions.current.height = ref.current.offsetHeight
    }, [])

    return dimensions.current
}

export default function SideBar() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null)
    const { height } = useDimensions(containerRef)

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'opened':'closed'}
            custom={height}
            ref={containerRef}
            className={styles.container}
        >
            <motion.div className={styles.background} variants={sidebar} />
            <div className={styles.navbar}>
                <NavlinkResponsive content={['About', 'Projects', 'Contact']} />
            </div>
            <ToggleButton toggle={() => toggleOpen()} />
        </motion.nav>
    )
}