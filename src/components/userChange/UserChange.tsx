import React from 'react';
import styles from './UserChange.module.css';
import cross from '../../images/Delete, Disabled.png'
import child1 from '../../images/user1.png'
import child2 from '../../images/user2.png'
import line from '../../images/Line.png'
import exit from '../../images/exit.png'
import { removeUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';

interface UserChangeProps {
    onChangeUser: () => void;
    close: () => void
}

const UserChange: React.FC<UserChangeProps> = ({ onChangeUser, close }) => {
    const dispatch = useAppDispatch()
    return (
        <div className={styles.userChangeContainer}>
            <div className={styles.crossContainer} onClick={close}><img src={cross} alt="disabled" /></div>
            <div className={styles.WindowHeader}>Смена пользователя</div>
            <div className={styles.child} onClick={onChangeUser}><img src={child1} alt="current user" /></div>
            <div className={styles.child} onClick={onChangeUser}><img src={child2} alt="user2" /></div>
            <div className={styles.line} ><img src={line} alt="line" /></div>
            <div className={styles.exit} onClick={() => dispatch(removeUser())}>
                <div>Выйти</div>
                <div><img src={exit} alt="logOut" /></div>
            </div>
        </div>
    );
};

export default UserChange;
