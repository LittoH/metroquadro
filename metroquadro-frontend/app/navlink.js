import styles from '../styles/Navlink.module.css';
import { useRouter } from 'next/router';

export default function Navlink({ title, path }) {

    const router = useRouter();
    const parsedPath = "/" + path;

    return (
        <div className={styles.link} onClick={ () => router.push('' + parsedPath) }>
            <h1 className={styles.title}>{title}</h1>
        </div>
    );

};


