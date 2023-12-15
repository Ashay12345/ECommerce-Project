import {BrowserRouter, Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './Home'
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>
          <Route path='/about'  element={<About/>}/>
            <Route path='/products'  element={<Products/>}/>
              <Route path='/contact'  element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
