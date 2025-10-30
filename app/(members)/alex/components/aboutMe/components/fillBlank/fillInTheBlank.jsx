import styles from "./fillInTheBlank.module.scss"

export default function FillBlank({ title, answer }) {
    return (
        <div className={styles.horizontal}>
            <div className={styles.title}>{ title } : </div>
            <div className={styles.verticle}>
                <div className={styles.answer}>{ answer }</div>
                <p>_________</p> {/* replace with img!! */}
            </div>
        </div>
    );
}