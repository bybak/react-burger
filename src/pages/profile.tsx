import styles from './pages.module.css';
import { ProfileMenu } from '../components/profile-menu/profile-menu';
import { UpdateProfileForm } from '../components/update-profile-form/update-profile-form';

export function Profile() {

    return (
        <section className={styles.profile}>
            <ProfileMenu />
            <UpdateProfileForm/>
        </section>
    )
}
