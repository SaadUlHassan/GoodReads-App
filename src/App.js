import React, { Component } from 'react'
import ButtonAppBar from './AppBar'
import SingleBook from './SingleBook'
import Home from './home'
import Login from './Login'
import AddUser from './addUser/AddUser'

import './App.css'

const App = () => (
  <div className='APP-INFO'>
    <ButtonAppBar />
    <AddUser />
  </div>
)

export default App
