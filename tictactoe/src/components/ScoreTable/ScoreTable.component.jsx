import React from "react";
import styles from "./ScoreTable.module.scss";
class ScoreTable extends React.Component {
  state = { ...this.props };
  render() {
    return (
      <>
        <ul className={styles.scoreTable}>
          <li className={styles.scoreTable__label__player1}>
            Player 1 <span>{this.state.player1Points}</span>
          </li>
          <li className={styles.scoreTable__label__player2}>
            Player 2 <span>{this.state.player2Points}</span>
          </li>
        </ul>
      </>
    );
  }
}
export default ScoreTable;
