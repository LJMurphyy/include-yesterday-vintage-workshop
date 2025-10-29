import styles from "./Introduction.module.scss";

export function Introduction() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.introName}>Introduction</h1>
        <p className={styles.introContent}>
          Hello! I&apos;m Andrew Williams. I am a student at the University of
          California, Davis, majoring in Computer Science. I am a current
          cohort, in the process of creating the official website for Yesterday
          Vintage Workshop. I am excited to be going on the journey with you!
        </p>
      </div>
    </div>
  );
}
