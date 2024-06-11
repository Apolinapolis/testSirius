import { useState } from "react";
import styles from "./LoginPage.module.css"

export function Form({title, onClick}) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <form action="" method="post">
            <input type="email" value={email} placeholder="E-mail" onChange={ e => setEmail(e.target.value)}/>
            <input type="password" value={pass} placeholder="Пароль" onChange={ e => setPass(e.target.value)}/>
            <input type="checkbox" name="remember" id="rememberId" className={styles.checkBox} />
            <label htmlFor="rememberId">Запомнить меня</label><br />
            <button type="submit" onClick={onClick}>{title}</button>
        </form>
    )
}