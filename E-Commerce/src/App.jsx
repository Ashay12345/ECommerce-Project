import {BrowserRouter, Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import ErrorPage from './ErrorPage'
import SingleProduct from './SingleProduct'
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>
          <Route path='/about'  element={<About/>}/>
            <Route path='/products'  element={<Products/>}/>
              <Route path='/contact'  element={<Contact/>}/>
                <Route path='/errorpage' element={<ErrorPage/>}/>
                  <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
