import React from 'react';
import styles from './Sidebar.module.css';
import logo from '../../images/logo.png'
import home from '../../images/left menu icon.png'
import list from '../../images/Group.png'
import pay from '../../images/Path.png'
import achievement from '../../images/cubok.png'
import training from '../../images/train.png'
import library from '../../images/folder-open.png'
import check from '../../images/Vector.png'
import settings from '../../images/sett.png'
import questions from '../../images/9.png'
import rekl from '../../images/Referral.png'
import { useLocation, useNavigate } from 'react-router-dom';



export const Sidebar: React.FC = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const getActiveLink = (path: string) => {
    return location.pathname === path ? `${styles.sidebarItem} ${styles.sidebarItemActive}` : `${styles.sidebarItem}`;
  }

  const items = [
    { text: 'Главная', icon: home, path: '/' },
    { text: 'Расписание', icon: list, path: '/calendar' },
    { text: 'Оплата', icon: pay, path: '/login' },
    { text: 'Достижения', icon: achievement, path: '/login' },
    { text: 'Тренажеры', icon: training, path: '/login' },
    { text: 'Библиотека', icon: library, path: '/login' },
    { text: 'Проверка связи', icon: check, path: '/login' },
    { text: 'Настройки', icon: settings, path: '/login' },
    { text: 'Вопросы', icon: questions, path: '/login' }
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarLogo}>
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <ul className={styles.sidebarList}>
        {items.map((item, index) => (
          <li key={index} className={getActiveLink(item.path)} onClick={()=>{navigate(item.path)}}>
            <img src={item.icon} />{item.text}
          </li>
        ))}
      </ul>
      <div className={styles.sidebarFooter}>
        <img src={rekl} alt="ops" />
      </div>
    </aside>
  );
};
