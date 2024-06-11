import { Link } from "react-router-dom"
import logo from "../images/Logomark_1_.png"
import styles from "./LoginPage.module.css"
import { Form } from "./Form"

export function Login() {
    return (
        <div className={styles.app}>
            <div className="container">
                <div className={styles.logoContain}><img src={logo} alt="ops" /></div>
                <div><h2>Вход в Sirius Future</h2></div>
                {/* <form action="" method="post">
                    <input type="email" name="email" id="emailId" placeholder="E-mail" />
                    <input type="password" name="password" id="passwordId" placeholder="Пароль" />
                    <input type="checkbox" name="remember" id="rememberId" className={styles.checkBox} /><label htmlFor="rememberId">Запомнить меня</label><br />
                    <button type="submit">Войти</button>
                </form> */}
                <Form title={"Войти"} onClick={console.log("test")}/>
                <div className={styles.escapeHatches}>
                    <div className={styles.escapeHatches_item}>Я забыл пароль</div>
                    <div className={styles.escapeHatches_item}>Войти как тренер</div>
                </div>
                <div>
                    <h4 id={styles.formToRegister}>Нет аккаунта?</h4>
                    <div className={styles.escapeHatches_item}>
                        <Link to="/register" className={styles.escapeHatches_item}>Зарегистрироваться</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}