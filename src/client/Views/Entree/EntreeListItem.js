
import React from 'react'
import EntreeCard from '../../Components/Entree/EntreeCard'

function EntreeListItems(props) {

  const entree = props.data

  console.log(props.data)

  return (
    <div>
      <h3>{entree.name}</h3>
      <p>{entree.description}</p>
    </div>
  )

}

export default EntreeListItems
