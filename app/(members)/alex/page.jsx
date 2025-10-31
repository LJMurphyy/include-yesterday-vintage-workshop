import styles from "./page.module.scss";
import NavBar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About";
import Skills from "./components/skills/Skills.jsx";
import EventCard from "./components/eventCard/eventCard.jsx";
import Footer from "./components/footer/Footer.jsx";

const projects = ["Mafia Discord Bot", "Rewards Tracker Website"];
const images = ["/team/alex/discord.gif", "/team/alex/plz.png"];
const descriptions = [
  "The Mafia Discord Bot is a Discord Bot that was designed for a specific server to manage an expanded-mafia game round. This enabled players with a whispering command, disabled certain chanells dependant on the day/night cycle, and gaver players and adminds 13 other commands.",
  "The Rewards Tracker Website was designed specifically for my client to keep track of their credit card travel rewards. The .NET website allowed for basic CRUD functionality along with input validation, a login page, and the ability to undo an action.",
];

export default function Jack() {
  return (
    <main>
      <NavBar />
      <About />
      <Skills />
      <section id="projects" className={styles.eventCard}>
        <section className={styles.title}>
          <h1>Projects</h1>
        </section>

        <div className={styles.card}>
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <EventCard
                  imageUrl={images[index]}
                  title={project}
                  description={descriptions[index]}
                ></EventCard>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
