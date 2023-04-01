import styles from '../../styles/Immobili.module.css'
import CustomButton from '../customButton';
import Link from 'next/link';

export default function Loading() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.searchEngineSection}>
                    <div className={styles.seCustomContainer}>
                        
                    </div>
                </section>

                <section className={styles.postHeroContent}>
                    <div className={styles.customContainer}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <Link className={styles.navigationLinks} href={"/immobili"}><h3>Immobili</h3></Link>
                            <h3 style={{ marginLeft: "5px", marginRight: "5px" }}>&gt;</h3>
                            <Link className={styles.navigationLinks} href={"/immobili"}><h3>Tutte le case</h3></Link>
                        </div>
                        <p>Loading...</p>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <CustomButton
                                text="Clicca per caricare altri immobili"
                                path="./"
                                theme="dark"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
