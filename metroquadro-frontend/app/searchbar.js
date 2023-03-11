import styles from '../styles/Searchbar.module.css'

export default function SearchBar() {
    return (
        <>
            <div className={styles.greenBarWrapper}>
                <input className={styles.searchBar} type="search" id="searchbar" placeholder="Inserisci qua le parole chiave"></input>
                <div className={styles.searchBarButton}>cerca</div>
                <div className={styles.searchBarButton}>filtra</div>
            </div>
        </>
    ) 
}