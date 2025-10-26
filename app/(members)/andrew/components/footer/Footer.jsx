import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className="footer">
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Andrew Williams. All rights reserved.
      </p>
    </footer>
  );
}
