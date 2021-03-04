
import React, { Component } from 'react'

// import Material UI Stuff
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Menu</Button>
          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar
