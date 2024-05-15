import { useRef, useState } from "react";

const Player = () => {
    const playerName = useRef<HTMLInputElement>(null);
    const [enteredPlayerName, setEnteredPlayerName] = useState<string>('');

    function handleClick() {
        setEnteredPlayerName(playerName.current?.value ?? 'unknown entity');
    }
    return (
        <section id="player">
            <h2>player {enteredPlayerName ?? 'unknown entity'}</h2>
            <p>
                <input ref={playerName} type="text" />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}

export default Player;