import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import { Navlink } from '../components/navlink';

export const Navbar = () => {

    const router = useRouter();

    return (
        <div className={styles.container}>
            <Navlink title="HOME" path=""/>
            <Navlink title="VENDI" path=""/>
            <Navlink title="COMPRA" path=""/>
            <Navlink title="AFFITTA" path=""/>
        </div>
    );
};