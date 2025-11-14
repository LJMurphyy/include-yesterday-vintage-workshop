"use client";

import styles from "./Navbar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.name}>
        <span>Gabe Venezia</span>
      </div>

      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
}
