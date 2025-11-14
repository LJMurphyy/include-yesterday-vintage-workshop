import styles from "./Footer.module.scss";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.icons}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={{ fontSize: "40px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/sabrinacheung06/"
          target="https://www.linkedin.com/in/sabrinacheung06/"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ fontSize: "40px" }} />
        </a>
        <a href="mailto:sabcheung@ucdavis.edu">
          <MdEmail style={{ fontSize: "40px" }} />
        </a>
      </section>

      <section className={styles.copyright}>
        <p>Sabrina Cheung 2025</p>
      </section>
    </footer>
  );
}
