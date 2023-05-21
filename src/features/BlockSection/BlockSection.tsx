import Icon from "../../assets/exclamationMark.svg";

import styles from "./BlockSection.module.css";

export const BlockSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.styleElement}></div>
      <div className={styles.infoSection}>
        <Icon className={styles.icon} />
        <div className={styles.info}>
          <p className={styles.text}>Паническая атака не убивает</p>
          <p className={styles.text}>
            Паническая атака - это следствие нервно-психического перенапряжения
            и не причина заболеваний
          </p>
        </div>
      </div>
    </div>
  );
};
