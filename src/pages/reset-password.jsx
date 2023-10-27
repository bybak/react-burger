import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './pages.module.css';
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate } from 'react-router-dom';
import { resetPassword } from '../services/actions/reset-password';

export function ResetPassword() {
    const dispatch = useDispatch();

    const forgot = useSelector((state) => state.forgotPassword.success);
    const authorization = useSelector((state) => state.userAuthorization.authorization);

    const [value, setValue] = React.useState({
        password: '',
        token: ''
    })

    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const handleReset = (evt) => {
        evt.preventDefault();
        dispatch(resetPassword(value.password, value.token));
    }

    if (!forgot) {
        return (
            <Navigate to={'/login'} />
        )
    }

    if (authorization) {
        return (
            <Navigate to={'/profile'} />
        )
    }

    return (
        <form className={styles.default} onSubmit={handleReset}>
            <h2 className="text text_type_main-medium">Восстановление пароля</h2>
            <PasswordInput
                placeholder='Введите новый пароль'
                onChange={(evt) => setValue({ ...value, password: evt.target.value })}
                value={value.password}
                name={'password'}
                icon="ShowIcon"
                extraClass="mt-6"
            />
            <Input
                type={'text'}
                placeholder={'Введите код из письма'}
                onChange={(evt) => setValue({ ...value, token: evt.target.value })}
                value={value.token}
                name={'name'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mt-6"
            />
            <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">Сохранить</Button>
            <div className={`${styles.choice} mt-20`}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    )
}
