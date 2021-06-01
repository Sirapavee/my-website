import { useEffect, useRef } from 'react'

import { motion, useCycle } from 'framer-motion'

import styles from '../../styles/Sidebar.module.scss'

import { NavlinkResponsive } from './navlink-responsive'
import { ToggleButton } from './togglebutton'

const sidebar = {
    opened: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100vw 0vh)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: 'circle(1px at 100vw 0vh)',
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

    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth
        dimensions.current.height = ref.current.offsetHeight
    }, [])

    return dimensions.current
}

interface props {
    signal?: Function
}

const defaultProps: props = {
    signal: null
}

export default function SideBar({ signal }: props) {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null)
    const { height } = useDimensions(containerRef)

    useEffect(() => {
        if (signal != null) {
            signal(isOpen)
        }
    }, [isOpen])

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'opened':'closed'}
            custom={height}
            ref={containerRef}
            className={styles.container}
        >
            <motion.div className={styles.background} variants={sidebar} />
            <motion.div className={styles.navbar}>
                <NavlinkResponsive content={['About', 'Projects', 'Contact']} isButtonOpen={isOpen} />
            </motion.div>
            <ToggleButton toggle={() => toggleOpen()} />
        </motion.nav>
    )
}

SideBar.defaultProps = defaultProps