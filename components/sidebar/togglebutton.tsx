import * as React from 'react'
import { motion } from 'framer-motion'

import styles from '../../styles/togglebutton.module.scss'

const Path = props => (
    <motion.path
        fill='transparent'
        strokeWidth='3'
        stroke='hsl(0, 0%, 0%)'
        strokeLinecap='round'
        {...props}
    />
);

export const ToggleButton = ({ toggle }) => (
    <button onClick={toggle} className={styles.toggleBtn}>
        <svg width='25' height='25' viewBox='0 0 25 25'>
            <Path
                variants={{
                    closed: { d: 'M 3 5 L 21 5'},
                    opened: { d: 'M 4 20 L 19 5' }
                }}    
            />
            <Path
                d="M 3 12.5 L 21 12.5"
                variants={{
                    closed: { opacity: 1 },
                    opened: { opacity: 0 }
                }}
                transition={{ duration: 0.1, }}
            />
            <Path
                variants={{
                    closed: { d: 'M 3 20 L 21 20'},
                    opened: { d: 'M 4 5 L 19 20' }
                }}    
            />
        </svg>
    </button>
)