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
                        <h1>IN OFFERTA</h1>
                        
                        <p>€340.000<br />Ostiglia, in Via San Romano Casetto 36B</p>
                    </div>
                </div>
            </div>
        </div>
    );
};