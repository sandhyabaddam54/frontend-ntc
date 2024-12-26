import React, {useState, useContext, createContext} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Cart from './Cart'
import Login from './Login'
import Signup from './Signup'
import Admin from './Admin'
import Orders from './Orders'
export const userContextSignUp = createContext();
export default function App() {
  const [result, setResult] = useState(null);
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  return (
    <div>
    <userContextSignUp.Provider value={{result, setResult, cart, setCart, products, setProducts}} >
      <BrowserRouter>
      <Header name ="Sandhya" age = {25}/>
      <Routes>
        <Route index element= {<Main />} />
        <Route path='main' element = {<Main />} />
        <Route path='cart' element= {<Cart />} />
        <Route path='orders' element={<Orders />}></Route>
        <Route path='admin' element={<Admin />}></Route>
        <Route path='login' element= {<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
      <Footer />    
      </BrowserRouter>
      </userContextSignUp.Provider>
    </div>
  )
}
