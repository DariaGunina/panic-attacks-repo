import { Logo } from "../../components/Logo";
import { Button } from "../../components/ Button";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Button name="Статьи" />
    </div>
  );
};
