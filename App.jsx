import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import Home from './Home'
import Layout from './Layout'
import Register from './Register'
import Resources from './Resources'
import Exams from './Exams'
import Deposer from './Deposer'
const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}>
    <Route path="/" element={<Layout/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/resources" element={<Resources/>}></Route>
    <Route path="/exams" element={<Exams/>}></Route>
    <Route path="/deposer" element={<Deposer/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
