const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  eMail: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  telephone: {
    type: String
  }
})

module.exports = mongoose.model('Users', UserSchema)