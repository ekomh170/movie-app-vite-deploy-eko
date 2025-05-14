import styles from './Hero.module.css';

function Hero() {
    return (
        <>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.hero__left}>
                        <h2 className={styles.hero__title}>Spiderman</h2>
                        <h3 className={styles.hero__genre}>Genre: Action</h3>
                        <p className={styles.hero__description}>
                            Spiderman No Way Home retells a story of Peter
                            Parker. At that time he was slandered by Mysterio,
                            Spiderman's enemy in the previous film, Spider-Man
                            Far From Home. Mysterio revealed the identity behind
                            the Spiderman costume and slandered him that Peter
                            was a murderer and a villain.
                        </p>
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button className={styles.hero__button}>Watch</button>
                    </div>
                    <div className={styles.hero__right}>
                        <img
                            className={styles.hero__image}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtauzk4w5HwCXrx3nAm5VTFcywz62gV18C3A7KFT03SgB2k8c0"
                            alt="placeholder"
                        />
                    </div>
                </section>
            </div>
        </>
    );
}

export default Hero;
