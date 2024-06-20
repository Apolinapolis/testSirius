import styles from "./Header.module.css"
import chat from '../../images/chat+user.png'
import UserChange from "../userChange/UserChange";
import { useState } from "react";

export const Header: React.FC = () => {

    const [showUserChange, setShowUserChange] = useState(false);

    const handleToggleUserChange = () => {
        setShowUserChange(!showUserChange)
    };

    const handleChangeUser = () => {
        // Логика смены пользователя
        console.log('Change User');
    };


    return (
        <header className={styles.header}>
            <div className={styles.greeting}><h2>Добро пожаловать, <span>Михаил</span>!</h2></div>
            <div onClick={handleToggleUserChange}><img src={chat} alt="ops" /></div>
            {showUserChange && <UserChange onChangeUser={handleChangeUser} close={handleToggleUserChange}/>}
        </header>
    )
}