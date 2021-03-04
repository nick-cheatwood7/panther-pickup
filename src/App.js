
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

// Components
import Navbar from './client/Components/Navbar/Navbar'

// Views
import HomeView from './client/Views/Home/HomeView'
import LoginView from './client/Views/Login/LoginView'
import SignupView from './client/Views/Signup/SignupView'

import MenuView from './client/Views/Menu/MenuView'
import CartView from './client/Views/Cart/CartView'
import OrderView from './client/Views/Order/OrderView'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route exact path="/login" component={LoginView} />
              <Route exact path="/signup" component={SignupView} />
              <Route exact path="/menu" component={MenuView} />
              <Route exact path="/order" component={OrderView} />
              <Route exact path="/cart" component={CartView} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
