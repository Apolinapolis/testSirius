import logo from "../images/Logomark_1_.png"
import styles from "./LoginPage.module.css"
import { Link } from "react-router-dom"
import { Form } from "./Form"
import { setUser } from "../store/slices/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from "../hooks/redux-hooks"
import { useState } from "react"



export function Login() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate("/")

            })
            .catch(() => alert('invalid user'))
    }

    const [lang, setLang] = useState(true)



    return (
        <div className={styles.app}>
            <div className="container">
                <div className={styles.logoContain}><img src={logo} alt="ops" /></div>
                <div><h2>Вход в Sirius Future</h2></div>
                <Form title={"Войти"} onClick={handleLogin} />
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
                <div className={styles.lang} onClick={() => setLang(!lang)}>{lang ? <h3>RU <span>EN</span></h3> : <h3><span>RU</span> EN</h3>}</div>
            </div>
        </div>
    )
}