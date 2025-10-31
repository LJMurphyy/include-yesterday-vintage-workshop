//replace all instances of "name" with your actual name!
//this is where you will be implementing the about page, most of your work is done in the about component

import styles from "./page.module.scss";
import NavBar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/projects.jsx";
import Footer from "./components/footer/Footer.jsx";


export default function Chloe() {
  return (
    <div className={styles.backgroundColor}>
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
