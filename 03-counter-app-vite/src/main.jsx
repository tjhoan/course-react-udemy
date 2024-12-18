import React from 'react'
import ReactDOM from 'react-dom/client'
import {CounterApp} from './CounterApp'
// import { FirstApp } from './FirstApp'

import './style.css'

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode> 
    <CounterApp value={100} />
    {/* <FirstApp title="Hola, soy Goku" /> */}
  </React.StrictMode>
)