import styles from "./Footer.module.scss";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a
          href="https://www.instagram.com/gabe._.ven/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={{ fontSize: "40px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-venezia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ fontSize: "40px" }} />
        </a>
        <a href="mailto:gvenezia@ucdavis.edu">
          <MdEmail style={{ fontSize: "40px" }} />
        </a>
      </div>
      <div className={styles.copyright}>
        <p>Gabe Venezia 2025</p>
      </div>
    </footer>
  );
}
