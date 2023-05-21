import { Image } from "../../components/Image";
import { Button } from "../../components/ Button";
import mainImage from "../../assets/main.jpg";
import ArrowImage from "../../assets/arrow.svg";

import styles from "./IntroductorySection.module.css";

export const IntroductorySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <ArrowImage />
        <h1 className={styles.title}>Панические атаки?</h1>
        <p className={styles.content}>
          Если у вас случилась паническая атака, вы можете кликнуть на кнопку
          самопомощи и выполнить упражнения, облегчающие симптомы проявления
          панической атаки
        </p>
        <Button isDifferentButton name="Жми сюда!" />
      </div>
      <Image
        imageClassName={styles.mainImg}
        className={styles.imageWrapper}
        image={mainImage}
        alt="img"
      />
    </div>
  );
};
