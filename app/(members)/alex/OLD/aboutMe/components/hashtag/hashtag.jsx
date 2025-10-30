import styles from "./hashtag.module.scss";
// at top of your component file (only for Next 13+ with app directory)
import { Rubik } from 'next/font/google';
const rubik = Rubik({ weight: ['700'], subsets: ['latin'] });

// inside component JSX:
//<p className={rubik.className}>#</p>

export default function Hashtag({ content }) {
    return (
        <div className={styles.horizontal}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900');
            </style>
            <p className={rubik.className}> # </p>
            <p>{ content }</p>
        </div>
    );
}