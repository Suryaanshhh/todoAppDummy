const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");
const cors=require("cors")
app.use(express.json());
app.use(cors())
app.post("/createTodo", async (req, res) => {
    try {
        const payLoad = req.body;
        const parsePayLoad = createTodo.safeParse(payLoad);
        if (!parsePayLoad.success) {
            res.status(411).json({ msg: "you sent wrong inputs" })
            return;
        }
        const newtodo = await todo.create({
            title: payLoad.title,
            description: payLoad.description,
            isCompleted: false
        })

        res.status(200).json({ msg: "Todo Created" })
    }
    catch (err) {
        res.status(600).json({
            err: err,
            msg: "SomeThing went wrong"
        })
    }
})

app.get("/showTodo", async (req, res) => {
    const getTodo = await todo.find({});

    res.status(200).json({
        todo: getTodo
    })
})

app.put("/mardAsDone", async (req, res) => {
    const updatedpayload = req.body;
    const parsePayLoad = updateTodo.safeParse(updatedpayload);
    if (!parsePayLoad.success) {
        res.status(411).json({ msg: "you sent wrong inputs" })
        return;
    }
    const todoUpdation = await todo.findByIdAndUpdate(updatedpayload.id, { $set: { isCompleted: true } });

    res.status(201).json({
        msg: "todoUpdated"
    })
})

app.listen(3000)
