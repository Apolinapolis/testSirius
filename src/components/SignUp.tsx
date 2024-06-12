import logo from "../images/Logomark_1_.png"
import styles from "./LoginPage.module.css"
import { Link } from "react-router-dom"
import { Form } from "./Form"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { setUser } from "../store/slices/userSlice"
import { useAppDispatch } from "../hooks/redux-hooks"


export function RegisterPage() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const handleReg = (email:string, password: string) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(({user} ) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                (navigate('/'))
            })
            .catch(console.error)
    }


    return (
        <div className={styles.app}>
            <div className="container">
                <div className={styles.logoContain}><img src={logo} alt="ops" /></div>
                <div><h2>Регистрация</h2></div>
                <Form title={"Подтвердить"} onClick={handleReg} />
                <div className={styles.escapeHatches}>
                    <Link to={"/login"} className={styles.escapeHatches_item}>Вспомнил пароль!</Link>
                    <div className={styles.escapeHatches_item}>Войти как тренер</div>
                </div>
                <div>
                    <div className={styles.escapeHatches_item}>
                        <Link to="/" className={styles.escapeHatches_item}>На главную</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}