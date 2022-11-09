import styles from '../styles/Herosection.module.css';

export const Herosection = () => {

    return (
        <div className={styles.herocontent}>
            
            {/*
            <img className={styles.heroimage} src="./casa.jpg" />
            */}

            <div className={styles.wrapperProperties}>
                <div className={styles.customContainer}>
                    <div className={styles.herodescription}>
                        SFOGLIA TUTTE LE CASE
                    </div>
                </div>
            </div>
        </div>
    );
};