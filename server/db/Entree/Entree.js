import Db from '../Db.js'
import EntreeDbModel from './entreeDbModel.js'

class Entree extends Db {

  test = () => {
    console.log('Connected to Entree')
  }

  getAllEntreeCollection = async () => {

    try {
      this.open()
      const entree = await EntreeDbModel.find()
      console.log(entree)
    } catch(err) {
      console.log('There was an error.', err)
    }

  }

  getBreakfastEntrees = () => {

  }

  saveEntree = async () => {

    try {
        this.open()
        const entree = new EntreeDbModel({ name: 'Test', description: 'Blah', tags: ['Tag1', 'Tag2'] })
        const entreeSaveRequest = await EntreeDbModel.save()
        console.log(entreeSaveRequest)
    } catch (err) {
        console.log(err)
    }
  }
}

export default Entree