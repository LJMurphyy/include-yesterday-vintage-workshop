"use client";

import { useState } from "react";
import { Introduction } from "../introduction/Introduction.jsx";
import styles from "./Main.module.scss";

const pages = ["Introduction", "Projects"];

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
      </main>
    </div>
  );
}
