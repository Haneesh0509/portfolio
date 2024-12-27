"use client";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <section className={`${styles.animeBackground}`}>
      <div
        className={`${styles.name} text-[#e8e9eb] absolute select-none hover:font-extrabold transition-all`}
      >
        <div
          className={`${styles.im}`}
        >
          I{`'`}M
        </div>
        <span className="haneesh-text">Haneesh</span>
      </div>
    </section>
  );
}
