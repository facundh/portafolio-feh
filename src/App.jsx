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
        <Route path='/home'element={<Layout />} />
        <Route index  element={<Home />}/>
        <Route   element={<Home />}/>
        <Route   element={<About />}/>
        <Route   element={<Skills />}/>
        <Route   element={<Projects />}/>
      </Routes>
    
    </BrowserRouter>
   
  )
}

export default App
