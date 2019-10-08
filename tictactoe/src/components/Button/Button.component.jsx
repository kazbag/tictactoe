import React from "react";
import styles from "./Button.module.scss";
const Button = ({ newGame }) => (
  <button className={styles.button} onClick={newGame}>
    Play again
  </button>
);
export default Button;
