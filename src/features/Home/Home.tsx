import { IntroductorySection } from "../IntroductorySection";
import { RepresentationSection } from "../RepresentationSection";
import { BlockSection } from "../BlockSection";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <IntroductorySection />
      <RepresentationSection />
      <BlockSection />
    </div>
  );
};
