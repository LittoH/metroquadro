
import styles from '../../styles/Immobili.module.css'
import CustomButton from '../customButton';
import HouseListContainer from '../houselistcontainer';
import SearchBar from '../searchbar';

export default function Immobili() {

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
                        <HouseListContainer />
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