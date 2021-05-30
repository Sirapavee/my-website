import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import styles from '../../styles/MySkill.module.scss'

import BannerHorizontal from './bannerHorizontal'
import SkillBox from './skillBox'
import { SKILLS } from '../../data/skills'

const containerVariants = {
    visible: {
        transition: {
          staggerChildren: 0.3, 
          delayChildren: 0.2
        }
    },
    hidden: {
        transition: {
            staggerChildren: 0.2, staggerDirection: -1
        }
    }
}

const technicVariants = {
    visible: {
        y: 0,
        opacity: 1,
    },
    hidden: {
        y: -100,
        opacity: 0,
    },
    onHover: {
        scale: 2,
    }
}

const languageVariants = {
    visible: {
        y: 0,
        opacity: 1,
    },
    hidden: {
        y: 100,
        opacity: 0,
    },
}

const softSkillVariants = {
    visible: {
        y: 0,
        opacity: 1,
    },
    hidden: {
        y: -100,
        opacity: 0,
    },
}

const getSkill = (skillList: any) => {

    let id = skillList.id
    let skills = skillList.skills
    let categories = []

    Object.keys(skills).map((category: string) => {
        categories.push(category)
    })

    return ( [id, categories] )
}

export default function MySkill() {

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce : false,
    })

    const [techID, techCategories] = getSkill(SKILLS[0])
    const [langID, langCategories] = getSkill(SKILLS[1])
    const [softID, softCategories] = getSkill(SKILLS[2])

    return (
        <motion.section
            ref={ref}
            initial={'hidden'}
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants} className={styles.container}
        >
            <BannerHorizontal text={'Skills'} />
            <SkillBox 
                variants={languageVariants} style={'lang'}
                header={'Language Skill'} data={SKILLS[1]} categories={langCategories}
            />
            <SkillBox 
                variants={technicVariants} style={'tech'}
                header={'Technical Skill'} data={SKILLS[0]} categories={techCategories}
            />
            <SkillBox 
                variants={softSkillVariants} style={'soft'}
                header={'Soft Skill'} data={SKILLS[2]} categories={softCategories}
            />
        </motion.section>
    )
}