import styles from "./About.module.scss";

export default function About() {
  return (
    <main id="about" className={styles.main}>
      <section className={styles.content}>
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <img src="/team/gabe/photo.jpg" alt="Gabe Profile Picture" />
          </div>
        </div>

        <div className={styles.textSide}>
          <div className={styles.textCard}>
            <h2>Hi, I'm Gabe</h2>
            <p>
              I'm a third-year Computer Science student at UC Davis. I have a
              keen interest in software development, artificial intelligence,
              and machine learning. My journey in the tech world has been fueled
              by a desire to create innovative solutions that make a difference.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
