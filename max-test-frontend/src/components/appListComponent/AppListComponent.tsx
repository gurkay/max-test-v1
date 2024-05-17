
import { useNavigate } from 'react-router-dom';
import { GoToComponents } from "../../enums/GoToComponents";

const AppListComponent = () => {
    const navigate = useNavigate();

    const handleComponents = (componentName: string) => {
        navigate('/' + componentName);
    }

    const listMenus = [
        { title: 'Fragment Component', onClick: () => handleComponents(GoToComponents.FRAGMENTCOMPONENT), value: 'Fragment Component' },
        { title: 'Example Component', onClick: () => handleComponents(GoToComponents.EXAMPLECOMPONENT), value: 'Example Component' },
        { title: 'Header Component 1', onClick: () => handleComponents(GoToComponents.HEADERCOMPONENT1), value: 'Header Component 1' },
        { title: 'Header Component 2', onClick: () => handleComponents(GoToComponents.HEADERCOMPONENT2), value: 'Header Component 2' },
        { title: 'Body Component', onClick: () => handleComponents(GoToComponents.BODYCOMPONENT), value: 'Fragment' },
        { title: 'Section Example Component', onClick: () => handleComponents(GoToComponents.SECTIONEXAMPLECOMPONENT), value: 'Fragment' },
        { title: 'Tic Tac Toe Component', onClick: () => handleComponents(GoToComponents.TICTACTOECOMPONENT), value: 'Fragment' },
        { title: 'Investing Component', onClick: () => handleComponents(GoToComponents.FRAGMENTCOMPONENT), value: 'Fragment' },
        { title: 'Fragment', onClick: () => handleComponents(GoToComponents.FRAGMENTCOMPONENT), value: 'Fragment' },
        { title: 'Fragment', onClick: () => handleComponents(GoToComponents.FRAGMENTCOMPONENT), value: 'Fragment' },
        { title: 'Fragment', onClick: () => handleComponents(GoToComponents.FRAGMENTCOMPONENT), value: 'Fragment' },
        { title: 'Fragment', onClick: () => handleComponents(GoToComponents.FRAGMENTCOMPONENT), value: 'Fragment' },
        { title: 'Fragment', onClick: () => handleComponents(GoToComponents.FRAGMENTCOMPONENT), value: 'Fragment' },
        { title: 'Fragment', onClick: () => handleComponents(GoToComponents.FRAGMENTCOMPONENT), value: 'Fragment' },
        { title: 'Fragment', onClick: () => handleComponents(GoToComponents.FRAGMENTCOMPONENT), value: 'Fragment' },
    ]

    return (
        <>
            <section id='Components'>
                <h2>Components</h2>
                <ul className='list-group'>
                    {
                        listMenus.map((list: any, index: number) => (
                            <li className='list-group-item' key={index}>
                                <button className='btn btn-primary' type='button' title={list.title} onClick={list.onClick}>{list.value}</button>
                            </li>
                        ))
                    }


                    <li className='list-group-item'>
                        <button className='btn btn-secondary' type='button' title='Tic Tac Toe Component' onClick={() => handleComponents(GoToComponents.INVESTINGCOMPONENT)}>Investing Component</button>
                    </li>
                    <li className='list-group-item'>
                        <button className='btn btn-secondary' type='button' title='Working Ref and Ports Component' onClick={() => handleComponents(GoToComponents.WORKINGREFSANDPORTSCOMPONENT)}>Working Ref and Ports Component</button>
                    </li>
                    <li className='list-group-item'>
                        <button className='btn btn-primary' type='button' title='Project Management System' onClick={() => handleComponents(GoToComponents.PROJECTMANAGEMENTAPPCOMPONENT)}>Project Managemen System</button>
                    </li>
                </ul>
            </section >
        </ >
    );
}

export default AppListComponent;