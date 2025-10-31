//project yay
import styles from "./projects.module.scss";
import React from "react";

export default function Projects() {
  return (
    <div>
      <main id="projects" className={styles.main}>
        <section className={styles.title}>
            <h1>Projects</h1>
        </section>
         <section className={styles.image}>
          <img src="/team/chloe/bear_frame_rice.png" alt="bearframe"></img>
        </section>
          <img className={styles.projectsImage} src="/team/chloe/cooked_bb.png" alt="cookedbear"></img>

        <section className={styles.description}>
            <h2> We Are Cooked! </h2>
            <p> We Are Cooked is a 2D cooking-farming adventure made on Godot using GDscript! Play as a chef who wakes up in a world
                full of animals. To get back home, you must spread your recipes across the kingdom of Pao Pao Land by farming, running
                your restaurant, and unlocking new shops. Serve the King and receive the map back home!
            </p>
            <a className={styles.link}
            href="https://rxsiebearr.itch.io/we-are-cooked"
            target="_blank"
            rel="noopener noreferer"
            >
                Play We Are Cooked Today!
            </a>
        </section>
      </main>
    </div>
  );
}