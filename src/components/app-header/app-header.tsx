import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css';

export function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <div className={styles.list}>
                    <div className={styles.leftSide}>
                        <div className="pt-4 pb-4 pl-5 pr-5">
                            <a href="#" className={styles.link}>
                                <BurgerIcon type="primary"/>
                                <div className="pl-3 text text_type_main-default">Конструктор</div>
                            </a>
                        </div>
                        <div className="pt-4 pb-4 pl-5 pr-5">
                            <a href="#" className={styles.link}>
                                <ListIcon type="secondary"/>
                                <div className="pl-3 text text_type_main-default text_color_inactive">Лента заказов</div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.logo}>
                        <a href="#">
                            <Logo/>
                        </a>
                    </div>
                    <div className={styles.account}>
                        <a href="#" className={styles.link}>
                            <ProfileIcon type="secondary"/>
                            <div className="pl-3 text text_type_main-default text_color_inactive">Личный кабинет</div>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
