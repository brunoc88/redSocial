const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true
  },
  apellido: {
    type: String,
    require: true
  },
  userName: {
    type: String,
    require: true,
    minlength: 5,
    unique: true
  },
  password: {
    type: String,
    require: true,
    minlength: 5
  },
  estado: {
    type: Boolean,
    default: true
  }
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // el passwordHash no debe mostrarse
    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
