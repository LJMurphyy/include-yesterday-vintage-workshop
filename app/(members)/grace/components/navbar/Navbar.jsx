// Now you have to make the navbar component yourself :)
// Question: does a "dropdown" have to be it's own component?
"use client";

import { useState } from "react";
import styles from "./Navbar.module.scss";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const aboutItems = [
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <nav className={styles.navBar}>
      <div>
        <span id="name">Grace Zhang</span>
      </div>

      <div className={styles.about}>
        <div className={styles.dropDown} onClick={() => setIsOpen(!isOpen)}>
          <span>About {isOpen ? "▼" : "◀"}</span>

          {isOpen && (
            <div className={styles.dropDownMenu}>
              {aboutItems.map((item, index) => (
                <a href={item.href} key={index}>
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
