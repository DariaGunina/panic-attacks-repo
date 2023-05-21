import LogoImg from "../../assets/logo.svg";

import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.container}>
      <LogoImg className={styles.image} />
      <h1 className={styles.title}>Panic attack</h1>
    </div>
  );
};
