import { useState } from "react";

interface IPlayerProps {
    initialPlayerName: string,
    playerSymbol: string,
    isActive: boolean,
    onChangeName: (symbol: string, newName: string) => void
}

const Player = ({ initialPlayerName, playerSymbol, isActive, onChangeName }: IPlayerProps) => {
    const [playerName, setPlayerName] = useState<string>(initialPlayerName);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    function handleEditClick() {
        setIsEdit((edit) => !edit);
        if (isEdit) {
            onChangeName(playerSymbol, playerName);
        }
    }

    function handleChange(event: any) {
        setPlayerName(event.target.value);

    }

    let playerNameTextAndInput = <span className="player-name">{playerName}</span>;

    if (isEdit) {
        playerNameTextAndInput = <input type="text" value={playerName} onChange={handleChange} required />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">{playerNameTextAndInput}</span>
            <span className="player-symbol">{playerSymbol}</span>
            <button onClick={handleEditClick}>{isEdit ? 'Save' : 'Edit'}</button>
        </li>
    );
}

export default Player;