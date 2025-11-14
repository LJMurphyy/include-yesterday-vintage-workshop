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
              Hi, I'm <span>Sabrina</span>!
            </h1>

            <p>
              I'm a second year data science major. Most of my experience comes from building projects using machine learning. I'm currently learning web development so I can develop full stack projects! I'm excited to see what fun web dev projects I'm able to build. {" "}
            </p>
          </article>
        </section>

        <section className={styles.picture}>
          <img src="/team/sabrina/sabrina.JPG" alt="Sabrina Profile Picture" />
          <div className={styles.circle}></div>
        </section>
      </section>
    </main>
  );
}
