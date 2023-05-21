import StyleElement from "../../../assets/element.svg";

import styles from "./InfoBlock.module.css";

interface Props {
  text: string;
}

export const InfoBlock = ({ text }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.element}></div>
      <p className={styles.info}>{text}</p>
    </div>
  );
};
