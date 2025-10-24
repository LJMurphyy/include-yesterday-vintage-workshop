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
          href="https://www.linkedin.com"
          target="https://linkedin/jack00z"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ fontSize: "40px" }} />
        </a>
        <a href="mailto:jaczhen@ucdavis.edu">
          <MdEmail style={{ fontSize: "40px" }} />
        </a>
      </section>

      <section className={styles.copyright}>
        <p>Jack Zheng 2025</p>
      </section>
    </footer>
  );
}
