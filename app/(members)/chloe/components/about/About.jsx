import styles from "./About.module.scss";
import React from "react";

// NOTE: Don't worry too much about the structure of this file
// We'll go over React components and javascript in another workshop

// TODO: Edit this component
export default function About() {
  return (
  <div>
    <main id="about" className={styles.main}>
      <section className={styles.content}>
        <section className={styles.about}>
          <article className={styles.items}>
            <span className={styles.role}>Programmer</span>

            <h1>
              Hi, I'm Chloe!
            </h1>

            <p>
              <img src="/team/chloe/bb_hi.png" alt="bearhi" className={styles.aboutImage} />
              I'm a passionate programmer with game development experience and I'm currently
              learning web developement. I enjoy building programs that help people and love solving 
              challenging problems. I'm always excited to learn more about programming through meaningful projects
              and enjoy experimenting to create practical solutions to real world problems.{" "}
            </p>
          </article>
        </section>

        <section className={styles.picture}>
          <img src="/team/chloe/bear_frame_me.png" alt="Chloe Profile Picture" />
        </section>
      </section>
    </main>
    </div>
  );
}
