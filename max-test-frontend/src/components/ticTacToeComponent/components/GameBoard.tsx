interface IGameBoardProps {
    onSelectSquare: (rowIndex: number, colIndex: number) => void,
    gameBoard: any
}

const GameBoard = ({ onSelectSquare, gameBoard }: IGameBoardProps) => {
    return (
        <ol id="game-board">
            {
                gameBoard.map((row: any, rowIndex: number) => (
                    <li key={rowIndex}>
                        <ol>
                            {
                                row.map((playerSymbol: string, colIndex: number) => (
                                    <li key={colIndex}>
                                        <button
                                            onClick={() => onSelectSquare(rowIndex, colIndex)}
                                            disabled={playerSymbol !== null}
                                        >
                                            {playerSymbol}
                                        </button>
                                    </li>
                                ))
                            }
                        </ol>
                    </li>
                ))
            }
        </ol>
    );
}

export default GameBoard;