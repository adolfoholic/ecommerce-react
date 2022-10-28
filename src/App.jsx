import axios from 'axios'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LoginScreen from './pages/LoginScreen'
import ProductId from './pages/ProductId'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Purchases from './pages/Purchases'

function App() {

  //Crear Cuenta para Login

  /*useEffect(() => {
    const URL='https://ecommerce-api-react.herokuapp.com/api/v1/users'
    const data = {
      firstName: 'Adolfo',
      lastName: 'Ruiz',
      email: 'adolfo@react.com',
      password: 'react123',
      phone: '9999999991',
      role: 'admin'
    }
    axios.post(URL, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  },[])*/


  return (
    <div className="App">
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductId/>}/>
      <Route path='/login' element={<LoginScreen/>}/>

      <Route element={<ProtectedRoutes/>}>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
      </Route>
     </Routes>
    </div>
  )
}

export default App
