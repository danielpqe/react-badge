import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import BadgeNew from './pages/BadgeNew.jsx'
import Badges from './pages/Badges.jsx'

const container = document.getElementById('app')

ReactDom.render(
<Badges 
/>, container);
