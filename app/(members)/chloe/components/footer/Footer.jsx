import styles from "./Footer.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <img className={styles.footerImage} src="/team/chloe/bb_sleeping.png" alt="sleepbear" />
      <section className={styles.icons}>
        <a
          href="https://github.com/rxsiebearr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ fontSize: "40px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/chloe-zou-672b0b379/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ fontSize: "40px" }} />
        </a>
        <a href="mailto:chzou29@gmail.com">
          <MdEmail style={{ fontSize: "40px" }} />
        </a>
      </section>

      <section className={styles.copyright}>
        <p>Chloe Zou 2025</p>
      </section>
    </footer>
  );
}
