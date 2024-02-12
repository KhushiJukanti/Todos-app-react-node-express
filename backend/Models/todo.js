const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema({
    taskName:String,
    taskDesc:String,
    id:Number,
    status:String
})

// exporting the module which is create from Schema
module.exports = mongoose.model("todo",toDoSchema,"todo")

