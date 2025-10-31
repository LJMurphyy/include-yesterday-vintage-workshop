import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <main id="skills" className={styles.main}>
      <section className={styles.title}>
        <h1>Skills</h1>
      </section>
      <section className={styles.content}>
        <img className={styles.skillsImage} src="/team/chloe/bb_smartr.png" alt="bearsmart"></img>
        <section className={styles.item}>
          <h2>GDscript</h2>
          <span className={styles.dash}>-</span>
          <p>1.5 Years of Experience</p>
        </section>

        <section className={styles.item}>
          <h2>JavaScript</h2>
          <span className={styles.dash}>-</span>
          <p>6 months of Experience</p>
        </section>

        <section className={styles.item}>
          <h2>C</h2>
          <span className={styles.dash}>-</span>
          <p>2 months of Experience</p>
        </section>
      </section>
    </main>
  );
}
