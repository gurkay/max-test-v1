
import { useNavigate } from 'react-router-dom';
import { GoToComponents } from "../../enums/GoToComponents";

const AppListComponent = () => {
    const navigate = useNavigate();

    const handleComponents = (componentName: string) => {
        navigate('/' + componentName);
    }

    return (
        <>
            <section id='Components'>
                <h2>Components</h2>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <button className='btn btn-primary' type='button' title='Fragment Component' onClick={() => handleComponents(GoToComponents.FRAGMENTCOMPONENT)}>Fragment Component</button>
                    </li>
                    <li className='list-group-item'>
                        <button className='btn btn-primary' type='button' title='Example Component' onClick={() => handleComponents(GoToComponents.EXAMPLECOMPONENT)}>Example Component</button>
                    </li >
                    <li className='list-group-item'>
                        <button className='btn btn-primary' type='button' title='Header Component 1' onClick={() => handleComponents(GoToComponents.HEADERCOMPONENT1)}>Header Component 1</button>
                    </li>
                    <li className='list-group-item'>
                        <button className='btn btn-primary' type='button' title='Header Component 2' onClick={() => handleComponents(GoToComponents.HEADERCOMPONENT2)}>Header Component 2</button>
                    </li>
                    <li className='list-group-item'>
                        <button className='btn btn-primary' type='button' title="Body Component" onClick={() => handleComponents(GoToComponents.BODYCOMPONENT)}>Body Component</button>
                    </li>
                    <li className='list-group-item'>
                        <button className='btn btn-primary' type='button' title='Section Example Component' onClick={() => handleComponents(GoToComponents.SECTIONEXAMPLECOMPONENT)}>Section Example Component</button>
                    </li>
                    <li className='list-group-item'>
                        <button className='btn btn-secondary' type='button' title='Tic Tac Toe Component' onClick={() => handleComponents(GoToComponents.TICTACTOECOMPONENT)}>Tic Tac Toe Component</button>
                    </li>
                    <li className='list-group-item'>
                        <button className='btn btn-secondary' type='button' title='Tic Tac Toe Component' onClick={() => handleComponents(GoToComponents.INVESTINGCOMPONENT)}>Investing Component</button>
                    </li>
                    <li className='list-group-item'>
                        <button className='btn btn-secondary' type='button' title='Working Ref and Ports Component' onClick={() => handleComponents(GoToComponents.WORKINGREFSANDPORTSCOMPONENT)}>Working Ref and Ports Component</button>
                    </li>
                </ul>
            </section >
        </ >
    );
}

export default AppListComponent;