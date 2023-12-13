import styles from './pages.module.css';
import { ProfileMenu } from '../components/profile-menu/profile-menu';
import { UpdateProfileForm } from '../components/update-profile-form/update-profile-form';
import {useEffect} from "react";
import {wsConnectionClosedUser, wsConnectionStartUser} from "../services/actions/websockets";
import {OrderHistory} from "../components/order-history/order-history";
import {useAppDispatch} from "../utils/hooks";
import {getCookie} from "../utils/cookie";

export function ProfileOrders() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(wsConnectionStartUser(`?token=${getCookie('access')}`));
        return () => {
            dispatch(wsConnectionClosedUser());
        };
    }, []);

    return (
        <section className={styles.profile}>
            <ProfileMenu />
            <OrderHistory />
        </section>
    )
}
