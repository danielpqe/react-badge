import React from 'react'
import ReactDom from 'react-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import Badge from './components/Badge'

const container = document.getElementById('app')

ReactDom.render(<Badge />, container);
