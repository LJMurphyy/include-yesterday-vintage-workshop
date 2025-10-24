import styles from "./About.module.scss";

// NOTE: Don't worry too much about the structure of this file
// We'll go over React components and javascript in another workshop

// TODO: Edit this component
export default function About() {
  return (
    <main id="about" className={styles.main}>
      <section className={styles.content}>
        <section className={styles.about}>
          <article className={styles.items}>
            <span className={styles.role}>Web Developer</span>

            <h1>
              Hi, I'm <span>Jack</span>!
            </h1>

            <p>
              As a web developer, I strive to build digital solutions that drive
              social change. Whether it's improving accessibility, amplifying
              important causes, or streamlining nonprofit operations, I aim to
              create websites that make a real impact.{" "}
            </p>
          </article>
        </section>

        <section className={styles.picture}>
          <img src="/team/jack/jack.JPG" alt="Jack Profile Picture" />
          <div className={styles.circle}></div>
        </section>
      </section>
    </main>
  );
}
