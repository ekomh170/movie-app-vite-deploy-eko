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
                            Spiderman is a superhero appearing in American comic
                            books published by Marvel Comics. The character was
                            co-created by writer Stan Lee and artist Steve
                            Ditko, and introduced in Spider-Man #1
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
