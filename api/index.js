const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const TodoModel = require("./model/todoModel");
require("dotenv").config()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: "mysecret" }));

const pass=process.env.DB_PASS

mongoose
  .connect(
    `mongodb+srv://emodb:${pass}@todo.jycp5.mongodb.net/todo?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  )
  .then(response => {
    console.log("Connection success");
  })
  .catch(err => {
    console.log(err);
  });

let todos = [];
app.get("/", (req, res) => {
  TodoModel.find().then(response => {
    todos = response;
    res.status(200).json({ todos: todos });
  });
});

app.post("/add-todo", async (req, res) => {
  let todo = req.body.todo;

  const newTodo = new TodoModel({
    message: todo
  });
  await newTodo.save();

  await TodoModel.find().then(response => {
    todos = response;
    res.status(200).json({ todos: todos });
  });
});

app.post("/remove-todo", async (req, res) => {
  let todo = req.body.todo;
  await TodoModel.findByIdAndDelete(todo._id).then(response => {});

  await TodoModel.find().then(response => {
    todos = response;
    res.status(200).json({ todos: todos });
  });
});

app.post("/uptade-todo", async (req, res) => {
  let todo = req.body.todo;
  let uptadeObj = {
    message: todo.message
  };
  await TodoModel.findByIdAndUpdate(todo._id, uptadeObj, { new: true }).then(
    response => {
      console.log(response, "GÜNCELEMEEE");
    }
  );

  await TodoModel.find().then(response => {
    todos = response;

    res.status(200).json({ todos: todos });
  });
});
module.exports = {
  path: "/api",
  handler: app
};
