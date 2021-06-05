import { motion } from 'framer-motion'

import styles from '../../styles/Contact.module.scss'

import ImageLink from '../contact/imageLink'

const sectionVariants = {
    visible: {
        transition: {
          staggerChildren: 0.3, 
          delayChildren: 0.2
        }
    },
    hidden: {
        transition: {
            staggerChildren: 0.05, 
            staggerDirection: -1
        }
    }
}

const hrLineVariants = {
    hidden: {
        width: 0,
        opacity: 0,
    },
    visible: {
        width: '60vw',
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
            duration: 0.5,
        }
    }
}

const titleVariants = {
    hidden: {
        y: 0,
        opacity: 0,
    },
    visible: {
        y: -20,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
            delay: 1,
        }
    }
}

const socialVariants = {
    hidden: {
        y: 0,
        opacity: 0,
        zIndex: 0,
    },
    visible: {
        y: 20,
        opacity: 1,
        zIndex: 2,
        transition: {
            type: 'spring',
            stiffness: 600,
            damping: 20,
            delay: 1,
        }
    }
}

export default function ContactSection({ status }) {
    return (
        <motion.section
            initial='hidden'
            animate={status ? 'hidden' : 'visible'}
            variants={sectionVariants}
            className={styles.container}
        >
            <motion.h1 className={styles.title} variants={titleVariants}>Contact Me</motion.h1>
            <motion.div className={styles.hrLine} variants={hrLineVariants} />
            <motion.div
                variants={socialVariants}
                className={styles.socialContainer}
            >
                <ImageLink href={'#'} keyword={'CV'} src={'/cv.svg'} alt={'my_cv-icon'} />
                <ImageLink href={'mailto:sirapavee@gmail.com'} keyword={'Email'} src={'/email.svg'} alt={'email-icon'} />
                <ImageLink href={'https://github.com/Sirapavee'} keyword={'Github'} src={'/github.svg'} alt={'github-icon'} />
                <ImageLink href={'https://www.facebook.com/zentinel2k/'} keyword={'Facebook'} src={'/facebook.svg'} alt={'facebook-icon'} />
                <ImageLink href={'https://www.linkedin.com/in/sirapavee-ganyaporngul-ab229418a/'} keyword={'LinkedIn'} src={'/linkedin.svg'} alt={'linkedin-icon'} />
            </motion.div>
        </motion.section>
    )
}