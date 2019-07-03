import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Components/Login'
import QRCode from './Components/QRCode'

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/qrcode" component={QRCode} />
    </Switch>
  </Router>
)

export default App;
