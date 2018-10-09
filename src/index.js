import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './scenes/App/App';

require('dotenv').config()

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
