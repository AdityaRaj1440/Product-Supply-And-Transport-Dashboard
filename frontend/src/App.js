import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom"

import UserCategory from './components/UserCategory'
import ManufacturerDashboard from "./components/ManufacturerDashboard"
import TransporterDashboard from "./components/TransporterDashboard"

import './App.css'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<UserCategory/>}></Route>
        <Route path="/manufacturer/dashboard" element={<ManufacturerDashboard/>}></Route>
        <Route path="/transporter/dashboard" element={<TransporterDashboard/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App