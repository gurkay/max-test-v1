import { UserInputProps } from "../interfaces/UserInputProps";

interface Props {
    userInput: UserInputProps;
    handleUserInputChange: (name: string, value: number) => void;
}


const UserInput = ({ userInput, handleUserInputChange }: Props) => {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        name="initialInvestment"
                        value={userInput.initialInvestment}
                        onChange={(event: any) => { handleUserInputChange('initialInvestment', event.target.value) }}
                        required
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        name="annualInvestment"
                        value={userInput.annualInvestment}
                        onChange={(event: any) => { handleUserInputChange('annualInvestment', event.target.value) }}
                        required
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        name="expectedReturn"
                        value={userInput.expectedReturn}
                        onChange={(event: any) => { handleUserInputChange('expectedReturn', event.target.value) }}
                        required
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        name="duration"
                        value={userInput.duration}
                        onChange={(event: any) => { handleUserInputChange('duration', event.target.value) }}
                        required
                    />
                </p>
            </div>
        </section>
    );
}

export default UserInput;