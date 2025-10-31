// Now you have to make the navbar component yourself :)
// Question: does a "dropdown" have to be it's own component?
"use client";

import { useState } from "react";
import styles from "./Navbar.module.scss";

export default function NavBar() {

  const leftItems = [
    {label: "About Me", href: "#about"},
    {label: "Skills", href: "#skills"},
  ];

  const rightItems = [
    {label: "Projects", href: "#projects"},
    {label: "Contact", href: "#contact"},
  ];

  return (
    <div className={styles.newWrapper}>
      <div className={styles.banner} >
        <img src="/team/chloe/bear_balloon.PNG" alt="banner" />
      </div>
      <nav className={styles.navBar}>

        <div className={styles.left}>
          {leftItems.map((item,index) => (
            <a href={item.href} key={index} className={styles.navButton}>
              {item.label}
            </a>
          ))}
        </div>
          
          <div className={styles.center}>
            <span id="name">Chloe Zou</span>
            <img className={styles.iconImage} src="/team/chloe/bb_monk.png" alt="monkeybear" />
          </div>
          
        <div className={styles.right}>
          {rightItems.map((item,index) => (
            <a href={item.href} key={index} className={styles.navButton}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
