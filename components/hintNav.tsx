import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import styles from 'styles/HintNavigation.module.scss'

const containerVariants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            repeat: Infinity, 
            repeatelay: 1,
            duration: 2.5,
        }
    },
    hidden: {
        opacity: 0,
        y: -30,
    }
}

interface props {
    id?: string
}

export default function HintNavigation({ id }: props) {

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce : false,
    })

    return (
        <motion.section
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants} 
            className={styles.hintCircle}
            data-lastitem={id}
        />
    )
}