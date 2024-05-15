import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

interface ITimerChallengeProps {
    title: string;
    targetTime: number;
}

const TimerChallenge = ({ title, targetTime }: ITimerChallengeProps) => {
    const timer = useRef<any>();
    const dialog = useRef<any>();

    const [timeRemaining, setTimeRemaining] = useState<number>(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

    function handleStartClick() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStopClick() {
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} result="Lost" targetTime={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-text">
                    {targetTime} second {targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStopClick : handleStartClick}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Challenge Started' : 'Challenge Stopped'}
                </p>
            </section>
        </>
    );
}

export default TimerChallenge;