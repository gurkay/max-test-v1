import { useState } from "react";
import "./TicTacToeComponent.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

import GameOver from "./components/GameOver";
import { IGameTurns } from "./interfaces/IGameTurns";
import { IPlayers } from "./interfaces/IPlayers";
import { INITIAL_PLAYERS } from "./constants/initial_players";
import { TicTacToeHelpers } from "./helpers/TicTacToeHelpers";

const TicTacToeComponent = () => {
    const [gameTurns, setGameTurns] = useState<IGameTurns[]>([]);
    const [players, setPlayers] = useState<IPlayers>(INITIAL_PLAYERS);

    const gameBoard = TicTacToeHelpers.deriveGameBoard(gameTurns);
    const activePlayer = TicTacToeHelpers.deriveActivePlayer(gameTurns);
    const winner = TicTacToeHelpers.deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex: number, colIndex: number) {
        setGameTurns((prevTurns: any) => {
            const currentPlayer = TicTacToeHelpers.deriveActivePlayer(prevTurns);
            const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
            return updatedTurns;
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol: string, newName: string) {
        setPlayers((prevPlayers: any) => {
            return {
                ...prevPlayers,
                [symbol]: newName,
            };
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialPlayerName={INITIAL_PLAYERS.X}
                        playerSymbol="X"
                        isActive={activePlayer === 'X'}
                        onChangeName={handlePlayerNameChange}
                    />
                    <Player
                        initialPlayerName={INITIAL_PLAYERS.O}
                        playerSymbol="O"
                        isActive={activePlayer === 'O'}
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} restart={handleRestart} />}
                <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default TicTacToeComponent;