//import styles from "*./aboutMe.module.scss";
import styles from "./aboutMe.module.scss";
import FillBlank from "./components/fillBlank/fillInTheBlank.jsx";
import Hashtag from "./components/hashtag/hashtag.jsx"

const hashtags = ["Organized", "Curious", "Artistic", "Nerd", "Flexible"];
const list = [{title : "Pronouns", answer : "They/Them"}, 
    {title : "Major", answer : "Computer Science"}, 
    {title : "Year", answer : "Freshman"}, 
    {title : "Zodiac", answer : "Virgo"},
    {title : "Allergies", answer : "Peanuts/Nuts"},
    {title : "Favorite Food", answer : "Cheese <3"},
    {title : "", answer : ""}
]

export default function AboutMe() {
    return (
        <main className={styles.main}>
            <div className={styles.horizontal}> {/* horizontal!! <--> */}
                <div className={styles.verticle}> {/* vertical!! ^v */}
                    <p>alex image</p>{/* hi im alex among us!! */}
                    <p>alex stats</p> {/* stats!! */}
                </div>
                <div className={styles.verticle}> {/* vertical!! ^v */}
                    <div className={styles.horizontal}>
                        {hashtags.map((hashtag, index) => {
                            return (
                                <div key={`hashtag-${index}`}>
                                    <Hashtag content={hashtag} />
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.verticle}>
                        {list.map((item, index) => {
                            return (
                                <div key={`list-${index}`}>
                                    <FillBlank title={item.title} answer={item.answer} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}