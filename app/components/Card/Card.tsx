import styles from "./Card.module.css";

export default function Card(props: {title: string, content: string, tags: string[]}) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content}>{props.content}</div>
      <div className={styles.tags}>
        {props.tags.map((tag: string, index: number) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
