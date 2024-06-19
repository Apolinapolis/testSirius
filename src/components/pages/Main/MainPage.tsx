import styles from './MainPage.module.css';
import { Sidebar } from '../../Sidebar/Sidebar';
import { Header } from "../../Header/Header";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { useAppDispatch } from "../../../hooks/redux-hooks"
import { useEffect } from "react";
import { removeUser } from "../../../store/slices/userSlice"
import { HomePageGrid } from '../../HomePageGrid/HomeGrid';



export const MainPage: React.FC = () => {

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
      <HomePageGrid />
      {/* <button onClick={() => dispatch(removeUser())}> Log out from {email} </button> */}
    </div>
  )
}