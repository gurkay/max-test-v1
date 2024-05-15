import { useState } from 'react';
import './InvestingComponent.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import { emptyUserInputProps } from './constants/emptyUserInputProps';
import Results from './components/Results';

const InvestingComponent = () => {
    const [userInput, setUserInput] = useState(emptyUserInputProps);

    const inputIsValid = userInput.duration >= 1;

    function handleUserInputChange(name: string, value: number) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [name]: +value
            }
        });
    }

    return (
        <>
            <Header />
            <UserInput userInput={userInput} handleUserInputChange={handleUserInputChange} />
            {!inputIsValid && <div className="error">Please enter a valid duration.</div>}
            {inputIsValid && <Results userInput={userInput} />}
        </>
    );
}

export default InvestingComponent;