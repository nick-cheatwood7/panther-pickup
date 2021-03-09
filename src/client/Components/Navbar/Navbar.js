
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// import Material UI Stuff
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit"component={Link} to="/menu">Menu</Button>
          <Button color="inherit"component={Link} to="/cart">Cart</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar
