import styles from '../styles/Navlink.module.css';
import Link from 'next/link';

export default function Navlink({ title, path, passedDownFunction }) {

    const parsedPath = "/" + path;

    return (
        <Link href={parsedPath} scroll={true} onClick={passedDownFunction}>
            <div className={styles.link}>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </Link>
    );

};


