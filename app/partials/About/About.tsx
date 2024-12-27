import sectionStyles from "../Section.module.css";
import styles from "./About.module.css";
import Image from "next/image";
import Age from "@/app/components/Age";

export default function About() {
  return <section className={sectionStyles.section} id={"about"}>
    <div className={sectionStyles.sectionTitle}>About me</div>
    <div className={sectionStyles.sectionContent + " " + styles.container}>
      <div className={"relative group"}>
        <Image src={"/profile.jpg"} alt={"Profile"} width={200} height={200} className={styles.profilePicture}/>
        <span className={styles.tooltip + " group-hover:block"}>
          It{"'"}s me! 💡
        </span>
      </div>
      <div className={"w-[70vw]"}>
        <div className={styles.nameContainer}>Haneesh Pediredla</div>
        <div className={styles.description}>
          Hi I{"'"}m Haneesh Pediredla, a <Age/> high school student! I{"'"}m interested in Coding and have made it my
          most favourite hobby! As a matter of fact, I created this website!
        </div>
      </div>
    </div>
    <div className={sectionStyles.sectionContent}>
      <ul className={styles.aboutList}>
        <li><span>👋 I{"'"}m a passionate tech enthusiast, creative thinker, and lifelong learner.</span></li>
        <li><span>💻 I thrive in the world of code and design, where I build ideas that come alive. Whether it{"'"}s crafting responsive web apps, creating stunning designs, or dabbling in AI, I enjoy every step of turning challenges into solutions.</span>
        </li>
        <li><span>🌱 Outside of coding, I’m a problem-solver at heart. I love exploring how technology can shape a better future, automate tasks, or simply make life more fun!</span>
        </li>
        <li><span>🎨 Fun fact: I enjoy blending technology and art, finding inspiration in sunsets, sci-fi, and clean, minimalistic aesthetics.</span>
        </li>
        <li><span>🚀 My mission? To grow, innovate, and leave a mark—one project at a time.</span></li>
      </ul>
    </div>
  </section>
}