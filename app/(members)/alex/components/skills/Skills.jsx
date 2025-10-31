import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <main id="skills" className={styles.main}>
      <section className={styles.title}>
        <h1>Skills</h1>
      </section>

      <section className={styles.content}>
        <section className={styles.item}>
          <h2>React Web Development</h2>
          <p>0.5 Years of Experience</p>
        </section>

        <section className={styles.item}>
          <h2>.NET Web Development</h2>
          <p>2 Years of Experience</p>
        </section>

        <section className={styles.item}>
          <h2>Discord Bot Development</h2>
          <p>3 Years of Experience</p>
        </section>

        <section className={styles.item}>
          <h2>Git/Github</h2>
          <p>0.5 Years of Experience</p>
        </section>
      </section>
    </main>
  );
}
