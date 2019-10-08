import React from "react";
import styles from "./Board.module.scss";
import Field from "../Field/Field.component";
class Board extends React.Component {
  render() {
    return (
      <div className={styles.board}>
        <Field id="0" />
        <Field id="1" />
        <Field id="2" />
        <Field id="3" />
        <Field id="4" />
        <Field id="5" />
        <Field id="6" />
        <Field id="7" />
        <Field id="8" />
      </div>
    );
  }
}

export default Board;
