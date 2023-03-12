import styles from '../../styles/Immobili.module.css'
import CustomButton from '../customButton';
import HouseListContainer from '../houselistcontainer';
import SearchBar from '../searchbar';

export default function Immobili() {

    let filterToApply = "";

    // Funzione puramente di debug e niente di più
    function LoadCaseMantova() {
        filterToApply = "&filter=(comune='Mantova')";
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.searchEngineSection}>
                    <div className={styles.seCustomContainer}>
                        <SearchBar />
                    </div>
                </section>

                <section className={styles.postHeroContent}>
                    <div className={styles.customContainer}>
                        <h1 className={styles.featuredHouseSectionTitle}>Sfoglia</h1>
                        <HouseListContainer filter={filterToApply} />
                        <CustomButton
                            text="Clicca per caricare altri immobili"
                            path="./"
                            theme="dark"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
};


