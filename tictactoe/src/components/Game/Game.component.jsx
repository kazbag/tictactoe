import React from "react";
import Board from "../Board/Board.component";
import ScoreTable from "../ScoreTable/ScoreTable.component";
class Game extends React.Component {
  state = {
    board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    startBoard: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    gameOver: false,
    playerClicked: "&times;",
    playerTurn: 0,
    playerWon: undefined,
    player1Points: 0,
    player2Points: 0
  };
  render() {
    return (
      <>
        <ScoreTable
          player1Points={this.state.player1Points}
          player2Points={this.state.player2Points}
        />
        <Board
          board={this.state.board}
          startBoard={this.state.board}
          gameOver={this.state.gameOver}
          playerClicked={this.state.playerClicked}
          playerTurn={this.state.playerTurn}
          playerWon={this.state.playerWon}
          player1Points={this.state.player1Points}
          player2Points={this.state.player2Points}
        />
      </>
    );
  }
}

export default Game;
