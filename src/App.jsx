import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./pages/Login";
import Landing from "./pages/Landing"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Login/>} />
                <Route exact path='/Landing' element={<Landing/>} />
                {/* <Route component={Page404} /> */}
            </Routes>
        </Router>
    )
}

export default App
