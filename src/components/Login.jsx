import logo from "../images/Logomark_1_.png"
import styles from "./LoginPage.module.css"
import { Link } from "react-router-dom"
import { Form } from "./Form"
import { useDispatch } from "react-redux"
import { setUser } from "../store/slices/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export function Login() {
   
    const dispatch = useDispatch()
   
    const handleLogin = (mail, pass) => {
        const auth = getAuth();
        signInWithEmailAndPassword(getAuth,mail, pass)
    }


    return (
        <div className={styles.app}>
            <div className="container">
                <div className={styles.logoContain}><img src={logo} alt="ops" /></div>
                <div><h2>Вход в Sirius Future</h2></div>
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