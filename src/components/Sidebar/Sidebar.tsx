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



export const Sidebar: React.FC = () => {
  const items = [
    { text: 'Главная', icon: home },
    { text: 'Расписание', icon: list },
    { text: 'Оплата', icon: pay },
    { text: 'Достижения', icon: achievement },
    { text: 'Тренажеры', icon: training },
    { text: 'Библиотека', icon: library },
    { text: 'Проверка связи', icon: check },
    { text: 'Настройки', icon: settings },
    { text: 'Вопросы', icon: questions }
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
          <li key={index} className={styles.sidebarItem}>
            <img src={item.icon}/>
            {item.text}
          </li>
        ))}
      </ul>
      <div className={styles.sidebarFooter}>
          <img src={rekl} alt="ops" />
      </div>
    </aside>
  );
};
