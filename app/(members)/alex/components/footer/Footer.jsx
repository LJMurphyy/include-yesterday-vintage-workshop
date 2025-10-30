import styles from "./Footer.module.scss";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.icons}>
        <a
          href="https://www.instagram.com/purple.cheeze/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={{ fontSize: "40px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/alex-marasigan/"
          target="https://www.linkedin.com/in/alex-marasigan/"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ fontSize: "40px" }} />
        </a>
        <a href="mailto:amarasigan@ucdavis.edu">
          <MdEmail style={{ fontSize: "40px" }} />
        </a>
      </section>

      <section className={styles.copyright}>
        <p>Alex Marasigan 2025</p>
      </section>
    </footer>
  );
}
