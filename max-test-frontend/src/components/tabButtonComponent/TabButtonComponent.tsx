import { ITabButtonProps } from "../../interfaces/ITabButtonProps";

const TabButton = ({ label, onClick, isSelected }: ITabButtonProps) => {
    return (
        <button className={isSelected ? 'active' : undefined} onClick={onClick}>{label}</button>
    );
}

export default TabButton;