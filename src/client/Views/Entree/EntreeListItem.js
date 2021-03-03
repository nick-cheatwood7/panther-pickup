
import React from 'react'
import EntreeCard from '../../Components/Entree/EntreeCard'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// props = {
//   key: 123,
//   data: {
//     name:
//     description
//   }
// }

const EntreeListItems = (props) => {

  const entree = props.data

  const classes = useStyles()

  console.log(entree)

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">{entree.name}</Typography>
        <Typography className={classes.pos} color="textSecondary">{entree.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  )

}

export default EntreeListItems
