import styles from '../styles/Herosection.module.css';
import CustomButton from './customButton';

export default function Herosection({ pageName = "homepage" }) {

    return (
        <>
            {pageName == "homepage" &&
                <div className={styles.herocontent}>
                    <div className={styles.wrapperProperties}>
                        <div className={styles.customContainer}>
                            <div className={styles.textContainer}>
                                <h1 className={styles.heroTitle}>Un catalogo <em>speciale</em> per<br></br> una scelta <em>importante</em></h1>
                            </div>
                            <div className={styles.buttonsContainer}>
                                <CustomButton
                                    text="SFOGLIA LE CASE"
                                    path="./immobili"
                                    theme="light"
                                />
                                <CustomButton
                                    text="VENDI IL TUO IMMOBILE"
                                    path="./vendi"
                                    theme="light"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }

            {pageName == "privacy" &&
                <div className={styles.herocontentPrivacy}>
                    <div className={styles.wrapperProperties}>
                        <div className={styles.customContainerTextOnly}>
                            <div className={styles.textContainer}>
                                <h1 className={styles.heroTitle}>La <em>Privacy</em> è una questione che trattiamo con <em>massima</em> cura</h1>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {pageName == "vendi" &&
                <div className={styles.herocontentVendi}>
                    <div className={styles.wrapperProperties}>
                        <div className={styles.customContainerTextOnly}>
                            <div className={styles.textContainer}>
                                <h1 className={styles.heroTitle}><em>Valorizzare</em> il vostro immobile è la <em>nostra missione</em></h1>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {pageName == "consulenze" &&
                <div className={styles.herocontentConsulenze}>
                    <div className={styles.wrapperProperties}>
                        <div className={styles.customContainerTextOnly}>
                            <div className={styles.textContainer}>
                                <h1 className={styles.heroTitle}><em>Consulenze gratuite</em> per eliminare le <em>insicurezze</em></h1>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};