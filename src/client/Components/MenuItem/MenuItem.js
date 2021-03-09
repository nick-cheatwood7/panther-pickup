import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

// MUI stuff
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    display: 'flex',
    marginBottom: 20,
  },
  image: {
    minWidth: 200,
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
}

class MenuItem extends Component {

  render() {

    const { classes, menuItem : { name, description, _id } } = this.props

    return (
      <Card className={classes.card}>
        {/* <CardMedia
          image={userImage}
          title="Profile image"
          className={classes.image}
        /> */}
        <CardContent className={classes.content}>
          <Typography variant="h5" component={Link} to={`/menuItem/${_id}`} color="primary
          ">{name}</Typography>
          <Typography variant="body2" color="textSecondary">{description}</Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(MenuItem)
