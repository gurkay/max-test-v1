import { Route, Routes } from "react-router-dom";

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

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppListComponent />} />
            <Route path='/link' element={<AppListComponent />} />
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