const express = require("express");

const router = express.Router()

const todos = [
    // {
    //     id:1,
    //     taskName:"Learn React",
    //     taskDesc:"I need to learn react by this month "
    // },
    // {
    //     taskName:req.body.taskName,
    //     taskDesc:req.body.taskDesc
    // }
]

router.get("/list", function(req,res){
    res.send(todos)
})

router.post("/create",function(req,res){
    console.log(req.body)
    todos.push({taskDesc:req.body.taskDesc,taskName:req.body.taskName,id:todos.length ? todos.length+1 : 1})
    res.send("create todo comming soon")
})






module.exports = router