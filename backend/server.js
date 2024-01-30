const express = require("express");
const app = express();

const cors = require("cors")

const todoRoutes = require("./routes/todo")
app.use(cors())

app.use(express.json())
// whenever you recieve req with prefix /todo please go inside todoRoutes file.
app.use("/todo",todoRoutes)


app.listen(7000,()=>{
    console.log("server is running on port 7000")
})