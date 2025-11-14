import styles from "./Skills.module.scss";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "C++",
    "SQL",
    "Git",
    "Java",
  ];

  return (
    <main id="skills" className={styles.main}>
      <section className={styles.title}>
        <h1>Skills</h1>
      </section>

      <section className={styles.content}>
        {skills.map((skill, idx) => (
          <section key={idx} className={styles.item}>
            <h2>{skill}</h2>
          </section>
        ))}
      </section>
    </main>
  );
}
