import Image from "next/image";
import ImageLine from "../../assets/patternedLine.svg";
import picture from "../../assets/image1.jpg";
import picture2 from "../../assets/image2.jpg";
import picture3 from "../../assets/image3.jpg";
import { InfoBlock } from "./InfoBlock";

import styles from "./RepresentationSection.module.css";

export const RepresentationSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
        dolor sit amet. Lorem ipsum dolor sit amet
      </p>
      <div className={styles.image}>
        <ImageLine alt="image" />
      </div>
      <div className={styles.block}>
        <div>
          <p className={styles.title}>О нас</p>
          <p className={styles.subtitle}>
            Этот сайт создан в помощь и поддержку тем, кто борется с паническими
            атаками
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
            ipsum dolor sit amet
          </p>
          <div className={styles.picture}>
            <Image width={480} height={300} src={picture} alt="image" />
          </div>
          <Image width={480} height={300} src={picture2} alt="image" />
        </div>
        <div>
          <Image src={picture3} width={400} height={570} alt="image" />
          <InfoBlock
            text="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
            ipsum dolor sit amet"
          />
          <InfoBlock
            text="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
            ipsum dolor sit amet"
          />
        </div>
      </div>
    </div>
  );
};
