import sectionStyles from  "../Section.module.css";
import styles from "./Skills.module.css";
import Card from "@/app/components/Card/Card";

const skills = [
  {
    name: "Leadership",
    content: "I am an efficient leader, who can manage his teams well. Although I prefer not standing out as Leader, I prefer to always support my team. I served as the Head Boy of my school in the academic year 2023-2024.",
    tags: ["Social", "Team"]
  },
  {
    name: "Speaking",
    content: "I'm an efficient speaker who has a fairly good voice that makes me speak over others. However, using my voice in loud mode for more that 1 hour weakens my voice for the next few days.",
    tags: ["Social", "Team"]
  },
  {
    name: "Web Development",
    content: "I am a full stack Web Developer and can build a fairly good website just like this one without AI. With AI my bounds go Limitless! This is the skill I'm best at + the one I like!",
    tags: ["Coding", "Web Development"]
  },
  {
    name: "NextJS",
    content: "A framework built on top of ReactJS to make the life of developers simple! I'm just amazed by the way this works and of course, it is the framework used to build this site! Next!",
    tags: ["Coding", "Web Development"]
  },
  {
    name: "NodeJS",
    content: "A framework built on top of JavaScript, used for making Web Apps powered by JavaScript! This is the tool which I use along with ExpressJS, Firebase, Supabase, AWS and a few other frameworks for backend!",
    tags: ["Coding", "Web Development"]
  },
  {
    name: "Python",
    content: "My memories are still fresh! This is the language I started my journey with. However, I'm just a mediocre who can't do much with Python! Hoping to learn this better soon though!",
    tags: ["Coding"]
  },
];

export default function Skills() {
  return <section className={sectionStyles.section + " bg-[#d0eaff] pb-[10rem] relative"} id="skills">
    <div className={sectionStyles.sectionTitle}>Skills</div>
    <div className={styles.skillsContainer + " " + sectionStyles.sectionContent} style={{textAlign: "center"}}>
      {
        skills.map((skill, index) => {
          return <Card key={index} title={skill.name} content={skill.content} tags={skill.tags}/>
        })
      }
    </div>
    <div className="skills-divider">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25" className="skills-fill"></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5" className="skills-fill"></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className="skills-fill"></path>
      </svg>
    </div>
  </section>
}