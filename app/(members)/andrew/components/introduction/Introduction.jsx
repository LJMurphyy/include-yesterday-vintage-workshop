import Image from "next/image";
import styles from "./Introduction.module.scss";

export function Introduction() {
  return (
    <section className={styles.container}>
      <section className={styles.box}>
        <div className={styles.imageContainer}>
          <Image
            src="/team/andrew/Andrew-Portrait.jpg"
            alt="image"
            width={337}
            height={450}
            className={styles.image}
          />
        </div>
        <section className={styles.content}>
          <h1 className={styles.introName}>Hi, I'm Andrew Williams</h1>
          <p className={styles.introContent}>
            Hello! I&apos;m Andrew Williams. I am a student at the University of
            California, Davis, majoring in Computer Science. I am a current
            cohort, in the process of creating the official website for
            Yesterday Vintage Workshop. I am excited to be going on the journey
            with you!
          </p>
        </section>
      </section>
    </section>
  );
}
