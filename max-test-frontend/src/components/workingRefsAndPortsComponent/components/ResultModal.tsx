import { forwardRef, useImperativeHandle, useRef } from "react";

interface ResultModalProps {
    result: string;
    targetTime: number;
}

const ResultModal = forwardRef(
    function ResultModal({ result, targetTime }: ResultModalProps, ref: any) {

        const dialog = useRef<any>();

        useImperativeHandle(ref, () => {
            return {
                open() {
                    dialog.current.showModal();
                }
            }
        });

        return (
            <dialog ref={dialog} className="result-modal" open>
                <h2>You {result}</h2>
                <p>The target time was <strong>{targetTime} seconds.</strong></p>
                <p>You stopped the timer with <strong>X seconds left.</strong></p>
                <form method="dialog">
                    <button>Close</button>
                </form>
            </dialog>
        );
    }
);

export default ResultModal;