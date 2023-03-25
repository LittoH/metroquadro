import styles from '../styles/Searchbar.module.css';

export default function SearchBar({ searchFilter, setSearchFilter }) {

    function LoadCaseMantova() {
        setSearchFilter("&filter=(comune='Mantova')");
    }

    function LoadCaseOstiglia() {
        setSearchFilter("&filter=(comune='Ostiglia')");
    }

    function LoadTutteCaseAttive() {
        setSearchFilter('');
    }

    return (
        <>
            <div className={styles.greenBarWrapper}>
                <input className={styles.searchBar} type="search" id="searchbar" placeholder="Inserisci qua le parole chiave"></input>
                <div className={styles.buttonsWrapper}>
                    <div className={styles.searchBarButton} onClick={() => LoadCaseMantova()} >Filtra per Mantova</div>
                    <div className={styles.searchBarButton} onClick={() => LoadCaseOstiglia()} >Filtra per Ostiglia</div>
                    <div className={styles.searchBarButton} onClick={() => LoadTutteCaseAttive()} >Reset filtri</div>
                </div>
            </div>
        </>
    )
}