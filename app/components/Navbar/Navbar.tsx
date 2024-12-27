"use client";
import styles from "./Navbar.module.css";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function Navbar() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(window.innerWidth <= 770)
      setIsMobile(true);
  }, []);

  window.onresize = () => {
    if(window.innerWidth <= 770)
      setIsMobile(true);
    else
      setIsMobile(false);
  };

  return <div
    className={styles.navbar}
    style={{
      zIndex: 5,
      background: "linear-gradient(90deg, rgba(246, 169, 204, 0.6) 0%, rgba(255, 202, 141, 0.6) 50%, rgba(252, 121, 142, 0.6) 100%)"
    }}
  >
    <a href="https://www.haneesh.in" className={styles.branding}>
      <span>Haneesh.in</span>
    </a>
    <div className={`${styles.links}`} style={{display: sidebarVisible?(isMobile?"block":"flex"):(isMobile?"none":"flex")}}>
      <a href={"#"} className={styles.link}>Home</a>
      <a href={"#skills"} className={styles.link}>Skills</a>
      <div className={`${styles.dropdown} group`}>
        This Page <Image src={"/down-arrow.png"} width={15} height={15} alt={"Down arrow"}
                        className="inline-block ml-1 group-hover:rotate-[-180deg]" style={{transition: "0.5s"}}/>
        <ul className={`${styles.dropdownContent} group-hover:block`}>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </div>
      <a href={"https://github.com/Haneesh0509/portfolio"} target={"_blank"} className={styles.link}>GitHub <Image className={"inline relative bottom-2.5 right-1.5"} src={"/popout.svg"} alt={"Popout"} height={15} width={15} /></a>
    </div>
    <div className={styles.toggleButton} onClick={() => {
      setSidebarVisible(!sidebarVisible);
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </div>
    <div className={isMobile && sidebarVisible ? styles.overlayActive : ""} style={{position: "fixed"}}></div>
  </div>;
}