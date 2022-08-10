import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import DataContext, { data } from './data/DataContext'
import App from './views/App'

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)