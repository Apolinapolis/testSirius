import React from 'react';
import './Sidebar.css';
import logo from '../images/logo.png'
import home from '../images/left menu icon.png'
import list from '../images/Group.png'
import pay from '../images/Path.png'
import achievement from '../images/cubok.png'
import training from '../images/train.png'
import library from '../images/folder-open.png'
import check from '../images/Vector.png'
import settings from '../images/sett.png'
import questions from '../images/9.png'
import rekl from '../images/Referral.png'



const Sidebar: React.FC = () => {
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
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <ul className="sidebar-list">
        {items.map((item, index) => (
          <li key={index} className={`sidebar-item`}>
            <img src={item.icon}/>
            {item.text}
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
          <img src={rekl} alt="ops" />
      </div>
    </aside>
  );
};

export default Sidebar;
