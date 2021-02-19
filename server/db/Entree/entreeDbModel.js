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
  }
})

const EntreeDbModel = mongoose.model('Entree', EntreeSchema)

export default EntreeDbModel


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