import Entree from '../../src/Models/Entree.js'

const getEntreeProperties = () => {
  const input = {
    id: 1234,
    name: 'Cheeze Pizza',
    pricePerUnit: '2',
    descritpion: 'One slice of cheese pizza.',
    tags: ['cheese', 'pizza']
  }

  const expectedOutput = {
    id: 1234,
    name: 'Cheeze Pizza',
    pricePerUnit: '2',
    descritpion: 'One slice of cheese pizza.',
    tags: ['cheese', 'pizza']
  }

  const entree = new Entree(input)
  if (JSON.stringify(entree.props) === JSON.stringify(expectedOutput))
    return true
  else
    return false
}

const setEntreeProperties = () => {
  return null
}

const entreeModelTests = [
  { name: 'Model | Get Entreee Properties', test: getEntreeProperties },
  { name: 'Model | Set Entree Properties', test: setEntreeProperties }
]

export default entreeModelTests