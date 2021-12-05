import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Abonos from "./pages/Abonos";
import Adeudos from "./pages/Adeudos";
import Carteras from "./pages/Carteras";
import Colaboradores from "./pages/Colaboradores";
import Colaborador from "./pages/Colaborador";
import SideMenu from "./components/SideMenu";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <>
        <Router>
                
            <Routes>
                <Route exact path='/' element={<Login/>} />
                {/* <Route exact path='/Landing' element={
                <>
                    <NavBar/>
                    <SideMenu/>
                    <Toolbar/>
                    <Landing/>
                </>
                }/> */}
                <Route exact path='/Abonos' element={
                <>
                    <NavBar/>
                    <SideMenu/>
                    <Toolbar/>
                    <Abonos />
                </>
                }/>
                <Route exact path='/Adeudos' element={
                <>
                    <NavBar/>
                    <SideMenu/>
                    <Toolbar/>
                    <Adeudos/>
                </>
                }/>
                <Route exact path='/Carteras' element={
                <>
                    <NavBar/>
                    <SideMenu/>
                    <Toolbar/>
                    <Carteras/>
                </>
                }/>
                <Route exact path='/Colaboradores' element={
                <>
                    <NavBar/>
                    <SideMenu/>
                    <Toolbar/>
                    <Colaboradores/>
                </>
                }/>
                {/* <Route exact path='/Colaborador' element={
                <>
                    <NavBar/>
                    <SideMenu/>
                    <Toolbar/>
                    <Colaborador/>
                </>
                }/> */}
                {/* <Route component={Page404} /> */}
            </Routes>
        </Router>
        </>
    )
}

export default App
