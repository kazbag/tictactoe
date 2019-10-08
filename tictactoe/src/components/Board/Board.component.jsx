import React from "react";
import styles from "./Board.module.scss";
import Field from "../Field/Field.component";
import Button from "../Button/Button.component";
class Board extends React.Component {
  state = {
    board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    gameOver: true,
    playerClicked: "&times;",
    playerTurn: 0,
    winningPatterns: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  };
  newGame = () => this.setState({ gameOver: false });
  checkGameStatus = e => {
    //todo
  };
  setField = e => {
    // console.table(event.target);
    this.state.playerClicked === "&times;"
      ? this.setState({ playerClicked: "&#x25EF;" })
      : this.setState({ playerClicked: "&times;" });
    e.target.innerHTML = this.state.playerClicked;
    // console.log(this.state.playerClicked);
  };
  render() {
    return (
      <div className={styles.board}>
        {!this.state.gameOver && (
          <>
            <Field setField={this.setField} id="0" />
            <Field setField={this.setField} id="1" />
            <Field setField={this.setField} id="2" />
            <Field setField={this.setField} id="3" />
            <Field setField={this.setField} id="4" />
            <Field setField={this.setField} id="5" />
            <Field setField={this.setField} id="6" />
            <Field setField={this.setField} id="7" />
            <Field setField={this.setField} id="8" />
          </>
        )}
        {this.state.gameOver && <Button newGame={this.newGame} />}
      </div>
    );
  }
}

export default Board;
