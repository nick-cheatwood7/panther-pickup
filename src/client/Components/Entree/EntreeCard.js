
import React from 'react'

function EntreeCard(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default EntreeCard
