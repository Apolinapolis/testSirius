import { useNavigate,  } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { removeUser } from "../../../store/slices/userSlice"
import { useAppDispatch } from "../../../hooks/redux-hooks"
import Calendar from '../../Calendar/Calendar';
import {Sidebar} from '../../Sidebar/Sidebar';
import styles from './SchedulePage.module.css';
import { Header } from "../../Header/Header";
import { Head } from "../../Head/Head";
import { useEffect } from "react";



export const SchedulePage: React.FC = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isAuth, email } = useAuth()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);


 

  return (
    <div className={styles.container}>  
      <Sidebar />
      <Header />
      <Head />
      <Calendar />
      {/* <button onClick={() => dispatch(removeUser())}> Log out from {email} </button> */}
    </div>
  )
}