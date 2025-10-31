// Now you have to make the navbar component yourself :)
// Question: does a "dropdown" have to be it's own component? IDK.. I deleted it
"use client";

import { useState } from "react";
import styles from "./Navbar.module.scss";

export default function NavBar() {
  //const [isOpen, setIsOpen] = useState(false);

  const aboutItems = [
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <nav className={styles.navBar}>
      <div>
        <span id="name">Alex Marasigan</span>
      </div>

      <div className={styles.about}>
        {aboutItems.map((item, index) => (
            <a href={item.href} key={index} className={styles.items}>
              {item.label} {' '}
            </a>
          ))}
      </div>
    </nav>
  );
}
