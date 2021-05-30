import styles from '../../styles/MySkill.module.scss'

export default function PillBox({ data, categories }) {
    return (
        <>
            {categories.map((category: string) => {
                return (
                    data.skills[category].map((item: string) => {
                        return (
                            <div key={item} className={styles.pillBox}>
                                {item}
                            </div>
                        )
                    })
                )
            })}
        </>
    )
}