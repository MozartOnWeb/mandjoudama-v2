import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="/">LinkedIn</Link>
        <Link href="/">Github</Link>
        <Link href="/">Twitter</Link>
      </div>

      <p>2025 Mandjou Dama. All rights reserved.</p>
    </footer>
  );
}
