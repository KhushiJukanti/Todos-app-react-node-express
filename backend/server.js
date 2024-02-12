const express = require("express");
var bodyParser = require("body-parser")
const app = express();

const mongoose = require("mongoose");
// Connect to MongoDB database using Mongoose.
mongoose.connect("mongodb://localhost:27017/Khushi_First-Mongo")

const cors = require("cors")

const todoRoutes = require("./routes/todo")
app.use(cors())

app.use(express.json())
// whenever you recieve req with prefix /todo please go inside todoRoutes file.
app.use("/todo",todoRoutes)


app.listen(7000,()=>{
    console.log("server is running on port 7000")
})