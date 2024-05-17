import { Route, Routes, useNavigate } from "react-router-dom";

import AppListComponent from "../appListComponent/AppListComponent";
import HeaderComponent from "../headerComponent/HeaderComponent";
import { headerComponentData } from "../../data/headerComponentData";
import FragmentComponent from "../fragmentComponent/FragmentComponent";
import ExampleComponent from "../exampleComponent/ExampleComponent";
import BodyComponent from "../bodyComponent/BodyComponent";
import InvestingComponent from "../investingComponent/InvestingComponent";
import ProjectManagementAppComponent from "../projectManagementAppComponent/ProjectManagementAppComponent";
import SectionComponent from "../sectionComponent/SectionComponent";
import TicTacToeComponent from "../ticTacToeComponent/TicTacToeComponent";
import WorkingRefsAndPortsComponent from "../workingRefsAndPortsComponent/WorkingRefsAndPortsComponent";
import { GoToComponents } from "../../enums/GoToComponents";
import { IListMenus } from "../../interfaces/IListMenus";



const MyRoutes = () => {

    const navigate = useNavigate();

    const handleComponents = (componentName: string) => {
        navigate('/' + componentName);
    }

    const listMenus: IListMenus[] = [
        { title: 'Fragment Component', onClick: () => handleComponents(GoToComponents.FRAGMENTCOMPONENT) },
        { title: 'Example Component', onClick: () => handleComponents(GoToComponents.EXAMPLECOMPONENT) },
        { title: 'Header Component 1', onClick: () => handleComponents(GoToComponents.HEADERCOMPONENT1) },
        { title: 'Header Component 2', onClick: () => handleComponents(GoToComponents.HEADERCOMPONENT2) },
        { title: 'Body Component', onClick: () => handleComponents(GoToComponents.BODYCOMPONENT) },
        { title: 'Section Example Component', onClick: () => handleComponents(GoToComponents.SECTIONEXAMPLECOMPONENT) },
        { title: 'Tic Tac Toe Component', onClick: () => handleComponents(GoToComponents.TICTACTOECOMPONENT) },
        { title: 'Investing Component', onClick: () => handleComponents(GoToComponents.INVESTINGCOMPONENT) },
        { title: 'Working Ref and Ports Component', onClick: () => handleComponents(GoToComponents.WORKINGREFSANDPORTSCOMPONENT) },
        { title: 'Project Management Application', onClick: () => handleComponents(GoToComponents.PROJECTMANAGEMENTAPPCOMPONENT) },
    ]

    return (
        <Routes>
            <Route path="/" element={<AppListComponent listMenus={listMenus} />} />
            <Route path="/header-component-1" element={<HeaderComponent title={headerComponentData[0].title} viteLogo={headerComponentData[0].viteLogo} reactLogo={headerComponentData[0].reactLogo} />} />
            <Route path="/header-component-2" element={<HeaderComponent {...headerComponentData[1]} />} />
            <Route path="/fragment-component" element={<FragmentComponent />} />
            <Route path="/example-component" element={<ExampleComponent />} />
            <Route path='/body-component' element={<BodyComponent />} />
            <Route path='/section-example-component' element={<SectionComponent id='body-component' title='Section Example' children={<ExampleComponent />} />} />
            <Route path='/tic-tac-toe-component' element={<TicTacToeComponent />} />
            <Route path='/investing-component' element={<InvestingComponent />} />
            <Route path='/working-refs-and-ports-component' element={<WorkingRefsAndPortsComponent />} />
            <Route path='/project-management-app-component' element={<ProjectManagementAppComponent />} />
        </Routes>
    );
}

export default MyRoutes;