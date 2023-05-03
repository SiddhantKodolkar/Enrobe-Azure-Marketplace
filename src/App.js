import React from 'react'
import Up from './components/Up'
import Home from './components/Home'
import Login from './components/Login'
import Database from './components/Database'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import User from './components/User'
import Feedbacks from './components/Feedbacks'
import Checkout from './components/Checkout'
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/help' element={<Up/>}/>
          <Route exact path='/user' element={<User/>}/>
          <Route exact path='/admin' element={<Feedbacks/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>
          <Route exact path='/database' element={<Database/>}/>
        </Routes>
      </Router>
    </>
  )
}
