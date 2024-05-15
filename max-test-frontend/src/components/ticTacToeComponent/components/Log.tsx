interface ILogProps {
    turns: any
}

const Log = ({ turns }: ILogProps) => {
    return (
        <ol id="log">Log:
            {
                turns.map((turn: any) => {
                    return (
                        <li key={`${turn.square.row}${turn.square.col}`}>
                            player: {turn.player}, row: {turn.square.row}, col: {turn.square.col}
                        </li>
                    );
                })
            }
        </ol>
    );
}

export default Log;