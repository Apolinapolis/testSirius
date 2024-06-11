import logo from "../images/Logomark_1_.png"
import styles from "./LoginPage.module.css"

export function Login(){
    return (
        <div className="App">
        <div className="container">
            <div className={styles.logoContain}><img src={logo} alt="ops"/></div>
            <div><h2>Вход в Sirius Future</h2></div>
            <form action="" method="post">
                <input type="email" name="email" id="emailId" placeholder="E-mail" />
                <input type="password" name="password" id="passwordId" placeholder="Пароль"/>
                <input type="checkbox" name="remember" id="rememberId" className="checkBox"/><label htmlFor="rememberId">Запомнить меня</label><br />
                <button type="submit">Войти</button>
                <div className="escapeHatches">
                    <div className="escapeHatches_item">Я забыл пароль</div>
                    <div className="escapeHatches_item">Войти как тренер</div>
                </div>
                <div>
                    <h4 id="formToRegister">Нет аккаунта?</h4>
                    <div className="escapeHatches_item"><a className="escapeHatches_item" href="yandex.ru">Зарегистрироваться</a></div>
                </div>
            </form>
        </div>
        </div>
    )
}