import styles from "./page.module.scss";
import AboutMe from "./components/aboutMe/aboutMe.jsx";

export default function Alex() {
    return (
        <main>
            <AboutMe/>
            <p className={styles.gloriaHallelujahRegular}>HELLLLLLLLLOOOOOOOOO</p>
        </main>
    );
}