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
            <span className={styles.role}>Freshman CS Major</span>

            <h1>
              Hey, I'm <span>Alex</span>!!
            </h1>

            <p>
              Exploring different career areas of computer science is what piqued my interest in 
              #include! The majority of my programming experience has been in web development, so 
              I am testing the waters to see if this is what I would really like to pursue. Outside
              of programming, I like drawing digital art, social deduction games (among us..), and karaoke
              to specifically Laufey.{" "}
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
