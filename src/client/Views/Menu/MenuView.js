import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

import MenuItem from '../../Components/MenuItem/MenuItem'

export class MenuView extends Component {

  state = {
    menuItems: null
  };

  componentDidMount() {
    // get menu items from server
    axios
      .get('/menuItems/6040633f9915e1226e715b6b')
      .then((res) => {
        this.setState({
          menuItems: res.data
        })
      })
      .catch(err => console.error(err))
  }

  render() {

    const { menuItems } = this.state
    console.log(menuItems)

    let recentMenuItemsMarkup = menuItems ? (
      menuItems.map((menuItem) => <MenuItem key={menuItem._id} menuItem={menuItem}/>)
    ) : (
        <p>Loading...</p>
    )

      return (
        <Grid container spacing={16}>
          <Grid item xs={12}>
          {recentMenuItemsMarkup}
          </Grid>
        </Grid>
      )
    }
}

export default MenuView
