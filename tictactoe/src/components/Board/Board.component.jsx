import React from "react";
import styles from "./Board.module.scss";
import Field from "../Field/Field.component";
import Button from "../Button/Button.component";
class Board extends React.Component {
  state = {
    board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    startBoard: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    gameOver: false,
    playerClicked: "&times;",
    playerTurn: 0,
    playerWon: undefined
  };

  gameOver = () => {
    this.setState({ gameOver: true });
  };

  newGame = () =>
    this.setState({
      gameOver: false,
      board: this.state.startBoard
    });

  checkGameStatus = () => {
    let boardField = this.state.board.slice();
    if (
      (boardField[0] === boardField[1] && boardField[1] === boardField[2]) ||
      (boardField[3] === boardField[4] && boardField[3] === boardField[5]) ||
      (boardField[6] === boardField[7] && boardField[6] === boardField[8]) ||
      (boardField[0] === boardField[3] && boardField[3] === boardField[6]) ||
      (boardField[1] === boardField[4] && boardField[1] === boardField[7]) ||
      (boardField[2] === boardField[5] && boardField[2] === boardField[8]) ||
      (boardField[0] === boardField[4] && boardField[4] === boardField[8]) ||
      (boardField[2] === boardField[4] && boardField[2] === boardField[6])
    ) {
      this.gameOver();
    }
  };
  setField = e => {
    let boardField = this.state.board.slice();
    boardField[e.target.id] = this.state.playerClicked;
    this.setState({ board: boardField }, () => {
      this.checkGameStatus();
    });
    this.state.playerClicked === "&times;"
      ? this.setState({ playerClicked: "&#x25EF;" })
      : this.setState({ playerClicked: "&times;" });
    e.target.innerHTML = this.state.playerClicked;
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
