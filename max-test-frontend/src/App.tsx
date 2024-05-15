import './App.css'
import HeaderComponent from './components/headerComponent/HeaderComponent'
import { headerComponentData } from './data/headerComponentData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppListComponent from './components/appListComponent/AppListComponent';
import FragmentComponent from './components/fragmentComponent/FragmentComponent';
import ExampleComponent from './components/exampleComponent/ExampleComponent';
import SectionComponent from './components/sectionComponent/SectionComponent';
import BodyComponent from './components/bodyComponent/BodyComponent';
import TicTacToeComponent from './components/ticTacToeComponent/TicTacToeComponent';
import InvestingComponent from './components/investingComponent/InvestingComponent';
import HeaderGeneralComponent from './components/headerGeneralComponent/HeaderGeneralComponent';
import WorkingRefsAndPortsComponent from './components/workingRefsAndPortsComponent/WorkingRefsAndPortsComponent';

function App() {

  return (
    <BrowserRouter>
      <HeaderGeneralComponent />
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
