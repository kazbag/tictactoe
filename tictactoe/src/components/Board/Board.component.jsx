import React from "react";
import styles from "./Board.module.scss";
import Field from "../Field/Field.component";
import Button from "../Button/Button.component";
class Board extends React.Component {
  state = { ...this.props };

  gameOver = () => {
    this.addPoints();
    this.setState({ gameOver: true });
  };
  addPoints = () => {
    switch (this.state.playerClicked) {
      case "&times;":
        this.setState(
          prevState => {
            return { player1Points: prevState.player1Points + 1 };
          },
          () => console.log(this.state.player1Points)
        );
        break;
      default:
        this.setState(
          prevState => {
            return { player2Points: prevState.player2Points + 1 };
          },
          () => console.log(this.state.player2Points)
        );
        break;
    }
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
      // or indexof 0 == -1 todo
    ) {
      this.gameOver();
    }
  };
  setField = e => {
    let boardField = this.state.board.slice();
    boardField[e.target.id] = this.state.playerClicked;
    if (typeof (boardField[e.target.id] === Number)) {
      this.setState({ board: boardField }, () => {
        this.checkGameStatus();
      });
      this.state.playerClicked === "&times;"
        ? this.setState({ playerClicked: "&#x25EF;" })
        : this.setState({ playerClicked: "&times;" });
      e.target.innerHTML = this.state.playerClicked;
    }
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
            <span className={styles.turn}>
              turn: {this.state.playerClicked === "&times;" ? "X" : "O"}
            </span>
          </>
        )}
        {this.state.gameOver && <Button newGame={this.newGame} />}
      </div>
    );
  }
}

export default Board;
