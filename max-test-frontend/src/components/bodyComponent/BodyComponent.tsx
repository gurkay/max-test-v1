import { useState } from "react";

interface IBodyProps {
    onClick?: () => void,
    value?: number,
}

const BodyComponent = ({ onClick, value, ...props }: IBodyProps) => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className="card">
            <section {...props}>
                {/* <button onClick={props.onClick}>
                count is {props.value}
            </button> */}
                <button onClick={() => setCount((count) => count + 1)} value={count}>
                    count is {count} {value}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </section>
        </div >
    );
}

export default BodyComponent;