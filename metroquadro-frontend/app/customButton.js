import styles from '../styles/CustomButton.module.css'
import Link from 'next/link'

export default function CustomButton({ text, path, theme }) {

    let parsedTheme = "featuredHouseButtonLight";

    if(theme == "dark"){
        parsedTheme = "featuredHouseButtonDark";
    }

    return (
        <Link href={path}>
            <div className={styles[`${parsedTheme}`]}>
                <h3>{text}</h3>
            </div>
        </Link>
    );
}