

import React, { Component } from 'react'

import EntreeListItem from './EntreeListItem'
import entreeData from '../../../server/db/Entree/data/entreeData.json'

export class EntreeList extends Component {

  entreesToRender = entreeData

  render() {
    return (
      <div>
        <h1>Entree List</h1>
        { this.entreesToRender.map((entree, i) => <EntreeListItem key={i} data={entree} />) }
      </div>
    )
  }
}

export default EntreeList
