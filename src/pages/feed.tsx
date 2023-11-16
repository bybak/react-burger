import React from 'react';
import { useSelector } from 'react-redux';
import styles from './pages.module.css';
import { Navigate } from 'react-router-dom';

export function Feed() {

    const authorization = useSelector((state: any) => state.userAuthorization.authorization);

    if (!authorization) {
        return (
            <Navigate to={'/login'} />
        )
    }

    return (
        <span className={`${styles.text} text text_type_main-medium text_color_inactive`}>будет реализовано</span>
    )
}
