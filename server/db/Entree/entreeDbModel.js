import mongoose from 'mongoose'

// const entreeDbModel = mongoose.model('Entrees', new mongoose.Schema({
//   name: String,
//   description: String,
//   tags: [String]
// }))

// export default entreeDbModel

const EntreeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  tags: {
    type: [String],
    required: true
  },
}, { collection: 'Entree'})

const EntreeDbModel = mongoose.model('Entree', EntreeSchema)

export default EntreeDbModel

// specify 'collection' in 'mongoose.Schema' object : https://stackoverflow.com/questions/5794834/how-to-access-a-preexisting-collection-with-mongoose


// import * as mongoose from 'mongoose'

// const CourseSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   repo: {
//     type: String,
//     required: true
//   }
// })

// const CourseDbModel = mongoose.model('Course', CourseSchema)

// export default CourseDbModel