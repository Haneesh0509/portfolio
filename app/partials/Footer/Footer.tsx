"use client";
import styles from "./Footer.module.css";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faGithub, faLinkedin, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  const [year, setYear] = useState(2025);

  useEffect(() => {
    const d = new Date();
    setYear(d.getFullYear());
  }, []);

  return <footer className={styles.footer}>
    <div className={styles.conclusionLine}>That{"'"}s it for this page! Hope you had a fun time exploring the site!</div>
    <div>
      <div className={"mt-3 ml-4 text-center"}>Copyright &copy; {year} <a href="https://haneesh.in">Haneesh.in</a></div>
      <div className={styles.socialLinks}>
        <a target={"_blank"} href={"https://instagram.com/haneesh.in"} className={styles.socialLink}><FontAwesomeIcon icon={faInstagram}/></a>
        <a target={"_blank"} href={"https://linkedin.com/in/haneesh-pediredla/"} className={styles.socialLink}><FontAwesomeIcon icon={faLinkedin}/></a>
        <a target={"_blank"} href={"https://github.com/Haneesh0509"} className={styles.socialLink}><FontAwesomeIcon icon={faGithub}/></a>
        <a target={"_blank"} href={"https://x.com/Haneesh_dev"} className={styles.socialLink}><FontAwesomeIcon icon={faXTwitter}/></a>
        <a target={"_blank"} href={"mailto:me@haneesh.in"} className={styles.socialLink}><FontAwesomeIcon icon={faPaperPlane}/></a>
      </div>
    </div>
  </footer>
}
