import React from 'react';
import styles from './UserChange.module.css';
import { removeUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';

interface UserChangeProps {
    onChangeUser: () => void;
}

const UserChange: React.FC<UserChangeProps> = ({ onChangeUser }) => {
    const dispatch = useAppDispatch()
    return (
        <div className={styles.userChangeContainer}>
            <button className={styles.button} onClick={onChangeUser}>Сменить пользователя</button>
            <button className={styles.button} onClick={() => dispatch(removeUser())}>Выйти</button>
        </div>
    );
};

export default UserChange;
