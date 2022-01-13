import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import Error404 from './components/404/404error'

import { BrowserRouter, Route,  Routes } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='*' element={<Error404/>}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
