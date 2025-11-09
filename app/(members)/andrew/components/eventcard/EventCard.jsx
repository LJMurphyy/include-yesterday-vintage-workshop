import Image from "next/image";
import styles from "./EventCard.module.scss";
import { Stack } from "../stack/Stack.jsx";

export function EventCard({ src, title, description, techStack }) {
  return (
    <div className={styles.container}>
      <div className={styles.eventLayout}>
        <div className={styles.image}>
          <Image src={src} alt="image" width={300} height={300} />
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.description}>
          <h3>{description}</h3>
        </div>
        <div className={styles.techStack}>
          {techStack.map((tech, index) => (
            <span key={index} className={styles.techItem}>
              <Stack stack={tech} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
