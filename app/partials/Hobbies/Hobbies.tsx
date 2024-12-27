import sectionStyles from "../Section.module.css";
import styles from "./Hobbies.module.css";

export function Hobbies() {
  return <section className={sectionStyles.section + " bg-[#333026]"}>
    <div className={sectionStyles.sectionTitle + " text-white"}>Hobbies</div>
    <div className={sectionStyles.sectionContent + " bg-[#333026] text-white"}>
      Hello World!
    </div>
  </section>
;
}
