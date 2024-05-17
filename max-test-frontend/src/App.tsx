import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HeaderGeneralComponent from './components/headerGeneralComponent/HeaderGeneralComponent';
import MyRoutes from './components/myRoutes/MyRoutes';


function App() {

  return (
    <BrowserRouter>
      <HeaderGeneralComponent />
      <MyRoutes />
    </BrowserRouter>
  )
}

export default App
