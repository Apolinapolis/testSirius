import styles from './SchedulePage.module.css';
import { useNavigate,  } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { Calendar } from '../../components/Calendar/Calendar';
import { Sidebar} from '../../components/Sidebar/Sidebar';
import { Header } from "../../components/Header/Header";
import { Head } from "../../components/Head/Head";
import { useEffect } from "react";



export const SchedulePage: React.FC = () => {

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
      <Head />
      <Calendar />
    </div>
  )
}