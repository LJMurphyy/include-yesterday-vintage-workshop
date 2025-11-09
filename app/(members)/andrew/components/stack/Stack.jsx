import styles from "./Stack.module.scss";

export function Stack({ stack }) {
  return (
    <div className={styles.container}>
      <div className={styles.stackLayout}>
        <p>{stack}</p>
      </div>
    </div>
  );
}
