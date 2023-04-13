import Logo from './images/logo/troll-face.png'
import styles from './Header.module.css'

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles['meme-generator']}>
               <img className={styles.logo} src={Logo}></img>
               <h2 className={styles['title-meme']}>Meme Generator</h2>
            </div>

            <div className={styles.titleProject3}>
                <h4 className={styles.project3}>React Course - Project 3</h4>
            </div>
        </header>
    )

}