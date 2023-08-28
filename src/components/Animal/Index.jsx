import styles from './animal.module.css'

export default function Animal({ animal }) {

    return (
        <>
            <div className={styles.card}>
                <img src={animal.url} alt={animal.name} />
                <div className={styles.body}>
                    <h2 className={styles.animalName}>{animal.name}</h2>
                </div>
            </div>
        </>

    )
}