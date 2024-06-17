import styles from "./Header.module.css"
import chat from '../../images/chat+user.png'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.greeting}><h2>Добро пожаловать, <span>Михаил</span>!</h2></div>
            <div><img src={chat} alt="ops" /></div>
        </header>
    )
}