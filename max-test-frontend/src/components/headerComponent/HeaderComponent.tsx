import { IHeaderProps } from '../../interfaces/IHeaderProps';
import './HeaderComponent.css';

const HeaderComponent = ({ title, viteLogo, reactLogo }: IHeaderProps) => {
    return (
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <header>
                <h1>{title}</h1>
            </header>
        </div>
    );
}

export default HeaderComponent;