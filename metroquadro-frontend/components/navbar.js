import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';
import { Navlink } from '../components/navlink';

export const Navbar = () => {

    const router = useRouter();

    return (
        <div id="navbarContainer" className={styles.container}>
            <div className={styles.customContainer}>
                <div className={styles.navbarSection}>
                    <img className={styles.logo} src="logo6.png" />
                </div>
                <div className={styles.navbarSection}>
                    <Navlink title="HOME" path=""/>
                    <Navlink title="VENDI" path=""/>
                    <Navlink title="COMPRA" path=""/>
                    <Navlink title="AFFITTA" path=""/>
                </div>
            </div>
        </div>
    );
};