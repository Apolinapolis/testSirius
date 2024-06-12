import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { removeUser } from "../store/slices/userSlice"
import { useAppDispatch} from "../hooks/redux-hooks"



export function HomePage() {

    const dispatch = useAppDispatch()

    const { isAuth, email } = useAuth()
    return isAuth ? (
        <div>
            <h1>Welcome!</h1>
            <Link to={"/login"}>Сменить учетные данные</Link> <br />
            <Link to={"/register"}>Зарегистрировать нового пользователя</Link>
            <button onClick={() => dispatch(removeUser())}
            >Log out from {email}</button>
        </div>
    )   
    : (
        <div>
            <h1>Пользователь не авторизован</h1>
            <Link to={"/login"}>Сменить учетные данные</Link>
           
        </div>
    )
        
}