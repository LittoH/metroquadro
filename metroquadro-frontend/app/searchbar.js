import styles from '../styles/Searchbar.module.css'
import CustomButton from './customButton'

export default function SearchBar() {
    return (
        <>
            <div className={styles.greenBarWrapper}>
                <input className={styles.searchBar} type="search" id="searchbar" placeholder="Inserisci qua le parole chiave"></input>
            </div>
        </>
    ) 
}