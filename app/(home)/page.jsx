import Link from "next/link";
import styles from "./page.module.scss";

const teamLeads = [
  { name: "Jack", image: "/team/jack/jack.JPG", href: "/jack" },
  { name: "Jasper", image: "/team/jasper/jasper.jpeg", href: "/jasper" },
];

const teamMembers = [
  { name: "1", image: "/team/", href: "/" },
  { name: "2", image: "/team/", href: "/" },
  { name: "3", image: "/team/", href: "/" },
  { name: "4", image: "/team/", href: "/" },
  { name: "5", image: "/team/", href: "/" },
  { name: "6", image: "/team/", href: "/" },
  { name: "7", image: "/team/", href: "/" },
  { name: "Gabe", image: "/team/", href: "/gabe" },
];

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section className={styles.teamContainer}>
        <h1>Yesterday Vintage Team</h1>

        <div className={styles.leadCards}>
          {teamLeads.map((lead) => (
            <Link key={lead.name} href={lead.href} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={lead.image} alt={`${lead.name} Profile`} />
              </div>

              <h2>{lead.name}</h2>
            </Link>
          ))}
        </div>

        <div className={styles.memberCards}>
          {teamMembers.map((member) => (
            <Link key={member.name} href={member.href} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={member.image} alt={`${member.name} Profile`} />
              </div>
              <h2>{member.name}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
