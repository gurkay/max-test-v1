import { IListMenus } from "../../interfaces/IListMenus";

interface IAppListComponentProps {
    listMenus: IListMenus[];
}

const AppListComponent = ({ listMenus }: IAppListComponentProps) => {


    return (
        <>
            <section id='Components'>
                <h2>Components</h2>
                <ul className='list-group'>
                    {
                        listMenus.map((list: IListMenus, index: number) => (
                            <li className='list-group-item' key={index}>
                                <button className='btn btn-primary' type='button' title={list.title} onClick={list.onClick}>{list.title}</button>
                            </li>
                        ))
                    }

                </ul>
            </section >
        </ >
    );
}

export default AppListComponent;