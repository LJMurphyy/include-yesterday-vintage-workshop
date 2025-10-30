//import styles from "*./aboutMe.module.scss";
import styles from "./aboutMe.module.scss";
import FillBlank from "./components/fillBlank/fillInTheBlank.jsx";
import Hashtag from "./components/hashtag/hashtag.jsx"

const hashtags = ["Organized", "Curious", "Artistic", "Nerd", "Flexible"];

export default function AboutMe() {
    return (
        <main className={styles.main}>
            <div className={styles.horizontal}> {/* horizontal!! <--> */}
                <div className={styles.verticle}> {/* vertical!! ^v */}
                    <p>alex image</p>{/* hi im alex among us!! */}
                    <p>alex stats</p> {/* stats!! */}
                </div>
                <div className={styles.verticle}> {/* vertical!! ^v */}
                    <div className={styles.horizontal.withPadding}>
                    {hashtags.map((hashtag, index) => {
                        return (
                            <div key={index}>
                                <Hashtag content={hashtags[index]}/>
                            </div>
                        );
                    })}
                    </div>
                    <FillBlank title="TITLE" answer="uwu answer"/>{/* fill in blank */}
                </div>
            </div>
        </main>
    );
}