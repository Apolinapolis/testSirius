import { useState, FC} from "react";
import styles from "./Form.module.css"

interface FormProps {
    title: string;
    onClick: (email: string, password: string) => void
}

export const Form: FC<FormProps> = ({title, onClick}) =>{
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div className={styles.formContain}>
            <input type="email" value={email} placeholder="E-mail" onChange={ e => setEmail(e.target.value)}/>
            <input type="password" value={pass} placeholder="Пароль" onChange={ e => setPass(e.target.value)}/>
            <input type="checkbox" name="remember" id="rememberId" className={styles.checkBox} />
            <label htmlFor="rememberId">Запомнить меня</label><br />
            <button className={styles.logBtn} type="submit" onClick={ ()=>{onClick(email, pass)} }>{title}</button>
        </div>
    )
}