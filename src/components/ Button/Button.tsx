import cx from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  name: string;
  onClick?: () => void;
  isDifferentButton?: boolean;
}

export const Button = ({ name, onClick, isDifferentButton }: ButtonProps) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.differentButton]: isDifferentButton,
      })}
      onClick={onClick}
      type={"button"}
    >
      {name}
    </button>
  );
};
