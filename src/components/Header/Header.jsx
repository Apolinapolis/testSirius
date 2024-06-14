import styles from "./Header.module.css"
import chat from '../../images/chat+user.png'

export function Header() {
    return (
        <header>
            <div className={styles.greeting}><h2>Добро пожаловать, <span>Михаил</span>!</h2></div>
            <div><img src={chat} alt="ops" /></div>
            {/* <div className={styles.user}><div className="chat"></div><div className="user"><div className="arrow"></div></div></div> */}
        </header>
    )
}