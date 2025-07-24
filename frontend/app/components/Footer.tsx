import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link target="_blank" href="https://www.linkedin.com/in/mandjou-dama/">
          LinkedIn
        </Link>
        <Link target="_blank" href="https://github.com/MozartOnWeb">
          Github
        </Link>
        <Link target="_blank" href="https://x.com/mandjou_code">
          Twitter
        </Link>
      </div>

      <p>2025 Mandjou Dama. All rights reserved.</p>
    </footer>
  );
}
