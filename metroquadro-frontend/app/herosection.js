import styles from '../styles/Herosection.module.css';
import CustomButton from './customButton';

export default function Herosection({ isHomePage = true }) {

    return (
        <>
            {isHomePage &&
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
                                    path="./"
                                    theme="light"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }

            {!isHomePage &&
                <div className={styles.herocontentPrivacy}>
                    <div className={styles.wrapperProperties}>
                        <div className={styles.customContainer}>
                            <div className={styles.textContainer}>
                                <h1 className={styles.heroTitle}>La <em>Privacy</em> è una questione che trattiamo con <em>massima</em> cura</h1>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};