import { motion } from 'framer-motion'

import styles from '../../styles/MySkill.module.scss'

import PillBox from './pillBox'

interface props {
    variants: any,
    style: string,
    header: string,
    data: Object,
    categories: String[]
}

export default function SkillBox({ variants, style, header, data, categories }: props) {

    let boxStyle = styles.langBox

    if (style === 'lang') {
        boxStyle = styles.langBox
    }
    else if (style === 'tech') {
        boxStyle = styles.technicBox
    }
    else if (style === 'soft') {
        boxStyle = styles.softBox
    }

    return (
        <motion.section
            variants={variants}
            className={boxStyle}
        >
            <header className={styles.title}>{header}</header>
            <div className={styles.pillContainer}>
                <PillBox data={data} categories={categories} />
            </div>
        </motion.section>
    )
}