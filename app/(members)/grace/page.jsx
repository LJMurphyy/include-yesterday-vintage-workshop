//replace all instances of "name" with your actual name!
//this is where you will be implementing the about page, most of your work is done in the about component

import styles from "./page.module.scss";
import NavBar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About";
import Skills from "./components/skills/Skills.jsx";
import EventCard from "./components/eventCard/eventCard.jsx";
import Footer from "./components/footer/Footer.jsx";

const projects = ["Project 1", "Project 2"];
const images = [];
const descriptions = [
  "Description",
  "Description",
];

export default function Grace() {
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
