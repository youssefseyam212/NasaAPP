import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Exoplanets from './pages/exoplanets'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' /> 
                <Route path='/exoplanets' element={<Exoplanets />} />
            </Routes>
        </Router>
    )
}