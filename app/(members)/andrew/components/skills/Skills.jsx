import styles from "./Skills.module.scss";

export function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.introName}>Skills</h1>
        <div className={styles.contents}>
          C/C++, C#, React TypeScript, Rust, Javascript
        </div>
      </div>
    </div>
  );
}
