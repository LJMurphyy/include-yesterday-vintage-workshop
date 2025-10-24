import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <main id="skills" className={styles.main}>
      <section className={styles.title}>
        <h1>Skills</h1>
      </section>

      <section className={styles.content}>
        <section className={styles.item}>
          <h2>HTML</h2>
          <p>1.5 Years of Experience</p>
        </section>

        <section className={styles.item}>
          <h2>CSS</h2>
          <p>1.5 Years of Experience</p>
        </section>

        <section className={styles.item}>
          <h2>JavaScript</h2>
          <p>1.5 Years of Experience</p>
        </section>
      </section>
    </main>
  );
}
