'use client';

import styles from '../styles/Navlink.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Navlink = ({ title, path }) => {

    //const router = useRouter();
    const parsedPath = "/" + path;

    return (
        <Link href={'' + parsedPath}>
            <div className={styles.link}>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </Link>
    );

};

/*
<div className={styles.link} onClick={ () => router.push('' + parsedPath) }>
    <h1 className={styles.title}>{title}</h1>
</div>
*/