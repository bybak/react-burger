import styles from './pages.module.css';
import { ProfileMenu } from '../components/profile-menu/profile-menu';
import { UpdateProfileForm } from '../components/update-profile-form/update-profile-form';
import {useEffect} from "react";
import {wsConnectionClosedUser, wsConnectionStartUser} from "../services/actions/websockets";
import {useDispatch} from "react-redux";
import {OrderHistory} from "../components/order-history/order-history";

export function ProfileOrders() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStartUser());
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