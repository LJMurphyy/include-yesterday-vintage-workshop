//replace all instances of "name" with your actual name!
//this is where you will be implementing the about page, most of your work is done in the about component

import styles from "./page.module.scss";
import NavBar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About";
import Skills from "./components/skills/Skills.jsx";
import EventCard from "./components/eventCard/eventCard.jsx";
import Footer from "./components/footer/Footer.jsx";

const projects = ["Blogin", "Quickly"];
const images = ["/team/jack/Blogin.png", "/team/jack/Quickly.png"];
const descriptions = [
  "Blogin is a CRUD web application that allows users to create blogs about their day to day lives.",
  "Quickly is a recipe finding web application that promotes food waste reduction. Users can insert the ingredients they have on hand and Quickly is able to find meals that can be made with those ingredients.",
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
