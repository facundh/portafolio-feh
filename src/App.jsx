import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
function App() {
  

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/home'element={<Layout />} >
        <Route index  element={<Home />}/>
        <Route path='about'  element={<About />}/>
        <Route path='skills'  element={<Skills />}/>
        <Route path='projects'  element={<Projects />}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
   
  )
}

export default App
