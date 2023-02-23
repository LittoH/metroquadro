
import styles from '../../styles/Immobili.module.css'
import FeaturedHouseContainer from '../featuredhousecontainer';

export default function Immobili() {

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.postHeroContent}>
                    <div className={styles.customContainer} style={{width: "90%"}}>
                        <h1 className={styles.featuredHouseSectionTitle}>IN PRIMO PIANO</h1>
                        <FeaturedHouseContainer />
                    </div>
                </section>
            </main>
        </div>
    );


};