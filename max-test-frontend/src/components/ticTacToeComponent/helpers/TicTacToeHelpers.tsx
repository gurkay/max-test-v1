import { initialGameBoard } from "../constants/initial_game_board";
import { WINNING_COMBINATIONS } from "../constants/winning_combinations";
import { IGameTurns } from "../interfaces/IGameTurns";

export const TicTacToeHelpers = {
    deriveActivePlayer(gameTurns: any) {
        let currentPlayer = 'X';

        if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
            currentPlayer = 'O';
        }
        return currentPlayer;
    },

    deriveGameBoard(gameTurns: IGameTurns[]) {
        let gameBoard = [...initialGameBoard.map((array: any) => [...array])];
        for (const turn of gameTurns) {
            const { square, player } = turn;
            const { row, col } = square;
            gameBoard[row][col] = player;
        }
        return gameBoard;
    },

    deriveWinner(gameBoard: any, players: any) {
        let winner;
        for (const combination of WINNING_COMBINATIONS) {
            const firstSquareSymbol: string = gameBoard[combination[0].row][combination[0].column];
            const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
            const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

            if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
                winner = players[firstSquareSymbol];
            }
        }
        return winner;
    }
}