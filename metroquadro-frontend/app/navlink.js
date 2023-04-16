import styles from '../styles/Navlink.module.css';
import Link from 'next/link';

export default function Navlink({ theme, title, path, passedDownFunction }) {

    let parsedTheme = "link";
    let textParsedTheme = "title";

    if (theme == "mobile") {
        parsedTheme = "mobileButton";
        textParsedTheme = "mobileTitle";
    }

    const parsedPath = "/" + path;

    return (
        <Link href={parsedPath} scroll={true} onClick={passedDownFunction}>
                <div className={styles[`${parsedTheme}`]}>
                    <h1 className={styles[`${textParsedTheme}`]}>{title}</h1>
                </div>
        </Link>
    );

};


