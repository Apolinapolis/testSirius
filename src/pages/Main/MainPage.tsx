import styles from './MainPage.module.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useEffect } from "react";
import { HomePageGrid } from '../../components/HomePageGrid/HomeGrid';



export const MainPage: React.FC = () => {

  const navigate = useNavigate()
  const { isAuth } = useAuth()

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
    </div>
  )
}