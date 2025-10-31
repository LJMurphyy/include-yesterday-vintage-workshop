// make an event card component!
import styles from "./eventCard.module.scss";

export default function eventCard({ imageUrl, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={imageUrl} />
      </div>

      <div className={styles.cardDescription}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
