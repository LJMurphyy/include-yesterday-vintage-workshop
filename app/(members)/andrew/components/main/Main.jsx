"use client";

import { useState } from "react";
import { Introduction } from "../introduction/Introduction.jsx";
import { Skills } from "../skills/Skills.jsx";
import { EventCard } from "../eventcard/EventCard.jsx";
import styles from "./Main.module.scss";
import { experiences } from "../../lists/experiences.js";
import { projects } from "../../lists/experiences.js";

const pages = ["Introduction", "Skills"];

export function Main() {
  const [currPage, setCurrPage] = useState("Introduction");

  return (
    <div>
      <div className={styles.navBar}>
        <div className={styles.navButtons}>
          {pages.map((page, index) => (
            <button
              className={styles.button}
              key={index}
              onClick={() => setCurrPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      <main className={styles.content}>
        {currPage === "Introduction" && (
          <div className={styles.fadeIn}>
            <Introduction />
          </div>
        )}
        {currPage === "Skills" && (
          <div className={styles.fadeIn}>
            <Skills />
          </div>
        )}
      </main>
      <div className={styles.title}>
        <h1>Experience</h1>
      </div>
      <div className={styles.experienceCard}>
        {experiences.map((experience, index) => (
          <EventCard
            key={index}
            src={experience.src}
            title={experience.title}
            description={experience.description}
            techStack={experience.techStack}
          />
        ))}
      </div>
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>
      <div className={styles.experienceCard}>
        {projects.map((experience, index) => (
          <EventCard
            key={index}
            src={experience.src}
            title={experience.title}
            description={experience.description}
            techStack={experience.techStack}
          />
        ))}
      </div>
    </div>
  );
}
