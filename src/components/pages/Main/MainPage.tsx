import { Link } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { removeUser } from "../../../store/slices/userSlice"
import { useAppDispatch } from "../../../hooks/redux-hooks"
import {Sidebar} from '../../Sidebar/Sidebar';
import styles from './SchedulePage.module.css';



export const SchedulePage: React.FC = () => {

  const dispatch = useAppDispatch()
  const { isAuth, email } = useAuth()

  return isAuth ? (
    <div className={styles.container}>
      <Sidebar />
      <button onClick={() => dispatch(removeUser())}> Log out from {email} </button>
    </div>
  )
    : (
      <div>
        <h1>Пользователь не авторизован</h1>
        <Link to={"/login"}>Сменить учетные данные</Link>
      </div>
    )

}