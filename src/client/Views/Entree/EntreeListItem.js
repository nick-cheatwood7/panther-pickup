
import React from 'react'
import EntreeCard from '../../Components/Entree/EntreeCard'

const EntreeListItems = (props) => {

  const entree = props.data

  console.log(entree)

  return (
    <div>
      <h2>{entree.name}</h2>
      <p>{entree.description}</p>
    </div>
  )

}

export default EntreeListItems
