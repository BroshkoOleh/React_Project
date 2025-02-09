import React from "react";
import styles from "../styles/MainStyles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} ${styles.container}`}>
        <p className={styles.footerItem}>&copy; 2024</p>
        <p className={styles.footerItem}>All rights reserved</p>
      </div>
    </footer>
  );
}
