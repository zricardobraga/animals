import styles from './footer.module.css'
import imageLinkedin from '../../assets/imgs/linkedin.png'
import imageGit from '../../assets/imgs/git.png'


export default function Footer() {
    return (
        <>
        <footer className={styles.main}>
            <div className={styles.content}>
                <div className={styles.contact}>
                    <a href="https://www.linkedin.com/in/jose-ricardo-braga/"> <img src={imageLinkedin} alt="linkedin logo"/></a>
                </div>
                <div className={styles.contact}>
                    <a href="https://github.com/zricardobraga"><img src={imageGit} alt="github logo" /></a>
                </div>
            </div>
            <p>2023 - All rights reserved</p>
        </footer>
        </>
);
}

