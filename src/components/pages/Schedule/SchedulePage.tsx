import { Link } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { removeUser } from "../../../store/slices/userSlice"
import { useAppDispatch } from "../../../hooks/redux-hooks"
import Calendar from '../../Calendar/Calendar';
import Sidebar from '../../Sidebar/Sidebar';
import styles from './SchedulePage.module.css';
import { Header } from "../../Header/Header";



export const SchedulePage: React.FC = () => {

  const dispatch = useAppDispatch()
  const { isAuth, email } = useAuth()

  return isAuth ? (
    <div className={styles.container}>
      <Sidebar />
      <Header />
      <Calendar />
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