import Link from 'next/link'
import Image from 'next/image'

import styles from 'styles/Contact.module.scss'

export default function ImageLink({ href, keyword, src, alt }) {
    return (
        <Link href={href} key={keyword} scroll={false}>
            <a className={styles.icon} target='_blank'>
                <Image
                    src={src}
                    alt={alt}
                    width={100}
                    height={100}
                />
            </a>
        </Link>
    )
}