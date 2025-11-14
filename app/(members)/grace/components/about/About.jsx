import styles from "./About.module.scss";
import EventCard from "../eventCard/eventCard"

// NOTE: Don't worry too much about the structure of this file
// We'll go over React components and javascript in another workshop

// TODO: Edit this component

const events = [
  {
    id: 1,
    imageUrl: "/team/grace/agape_satellite.jpg",
    title: "Satellite - Harry Styles",
    description: "Dance Concept Video of Harry Style's Satellite",
  },
];

export default function About() {
  return (
    <main id="about" className={styles.main}>
      <section className={styles.content}>
        <section className={styles.about}>
          <article className={styles.items}>
            <span className={styles.role}>Web Developer</span>

            <h1>
              Hi, I'm <span>Grace</span>!
            </h1>

            <p>
              This is my About Me Page.{" "}
            </p>
          </article>
        </section>

        <section className={styles.picture}>
          <img src="team/grace/grace.jpg" alt="Grace Profile Picture" />
          <div className={styles.circle}></div>
        </section>
      </section>

      <section className={styles.events}>
        <h2 className={styles.title}>Interests</h2>
        <div className={styles.cardGrid}>
          {events.map((event) => (
            <EventCard
              key={event.id}
              imageUrl={event.imageUrl}
              title={event.title}
              description={event.description}
              />
          ))}
        </div>
      </section>

    </main>
  );
}
