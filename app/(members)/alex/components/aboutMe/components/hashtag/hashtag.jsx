import styles from "./hashtag.module.scss";

export default function Hashtag({ content }) {
    return (
        <div className={styles.horizontal}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900');
            </style>
            <p className={styles.rubik700}> # </p>
            <p>{ content }</p>
        </div>
    );
}