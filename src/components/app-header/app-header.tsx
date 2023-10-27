import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css';
import {NavLink, useMatch} from "react-router-dom";

export function AppHeader() {
    const isConstructor = useMatch('/')
    const isFeed = useMatch('/feed')
    const isProfile = useMatch('/profile')

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <div className={styles.list}>
                    <div className={styles.leftSide}>
                        <div className="pt-4 pb-4 pl-5 pr-5">
                            <NavLink to='/' className={styles.link}>
                                <BurgerIcon type={isConstructor ? 'primary' : 'secondary'}/>
                                <div className={isConstructor ? "pl-3 text text_type_main-default" : "pl-3 text text_type_main-default text_color_inactive"}>Конструктор</div>
                            </NavLink>
                        </div>
                        <div className="pt-4 pb-4 pl-5 pr-5">
                            <NavLink to='/feed' className={styles.link}>
                                <ListIcon type={isFeed ? 'primary' : 'secondary'}/>
                                <div className={isFeed ? "pl-3 text text_type_main-default" : "pl-3 text text_type_main-default text_color_inactive"}>Лента заказов</div>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.logo}>
                        <NavLink to="/">
                            <Logo/>
                        </NavLink>
                    </div>
                    <div className={styles.account}>
                        <NavLink to="/profile" className={styles.link}>
                            <ProfileIcon type={isProfile ? 'primary' : 'secondary'}/>
                            <div className={isProfile ? "pl-3 text text_type_main-default" : "pl-3 text text_type_main-default text_color_inactive"}>Личный кабинет</div>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}
