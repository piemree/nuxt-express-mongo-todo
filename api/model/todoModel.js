//Require Mongoose
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  date: {
    type:Date,
    required: true,
    default: new Date()
  }
});

// Compile model from schema
const TodoModel = mongoose.model("Todos", TodoSchema);

module.exports = TodoModel;
