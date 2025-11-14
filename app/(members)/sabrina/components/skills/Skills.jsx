import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <main id="skills" className={styles.main}>
      <section className={styles.title}>
        <h1>Skills</h1>
      </section>

      <section className={styles.content}>
        <section className={styles.item}>
          <h2>Python</h2>
          <p>1.5 Years of Experience</p>
        </section>

        <section className={styles.item}>
          <h2>R</h2>
          <p>1 Year of Experience</p>
        </section>

        <section className={styles.item}>
          <h2>Java</h2>
          <p>1 Years of Experience</p>
        </section>
      </section>

      <img src="/team/sabrina/snoopy.png" alt = "Snoopy" className={styles.snoopy} />
    </main>
  );
}
