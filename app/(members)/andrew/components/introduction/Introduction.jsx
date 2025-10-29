import styles from "./Introduction.module.scss";

export function Introduction() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.introName}>Introduction</h1>
        <p className={styles.introContent}>
          Hello! I&apos;m Andrew Williams, a passionate developer with a love
          for creating software. I enjoy the process of building what I have in
          mind, from services to game character controllers. When I have free
          time, I always appreciate hiking outdoors and taking part in new
          hobbies. That is what inspires me to continue to create.
        </p>
      </div>
    </div>
  );
}
