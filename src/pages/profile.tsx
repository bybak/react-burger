import styles from './pages.module.css';
import { ProfileMenu } from '../components/profile-menu/profile-menu';
import { UpdateProfileForm } from '../components/update-profile-form/update-profile-form';
import {useEffect} from "react";
import {wsConnectionClosedUser, wsConnectionStartUser} from "../services/actions/websockets";
import {useAppDispatch} from "../utils/hooks";

export function Profile() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(wsConnectionStartUser());
        return () => {
            dispatch(wsConnectionClosedUser());
        };
    }, []);

    return (
        <section className={styles.profile}>
            <ProfileMenu />
            <UpdateProfileForm/>
        </section>
    )
}
