import styles from '../styles/Searchbar.module.css'
import CustomButton from './customButton'

export default function SearchBar() {
    return (
        <>
            <input className={styles.barBackground} type="search" id="searchbar" placeholder="Inserisci qua le parole chiave"></input>
            <CustomButton
                text="Filtri"
                path="/immobili"
                theme="dark"
             />
        </>
    ) 
}