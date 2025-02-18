const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./type");

app.use(express.json());

app.post("/createTodo", (req, res) => {
    const payLoad = req.body;
    const parsePayLoad = createTodo.safeParse(payLoad);
    if (!parsePayLoad.success) {
        res.status(411).json({ msg: "you sent wrong inputs" })
        return;
    }

})

app.get("/showTodo", (req, res) => {

})

app.put("/mardAsDone", (req, res) => {
    const updatedpayload = req.body;
    const parsePayLoad = updateTodo.safeParse(updatedpayload);
    if (!parsePayLoad.success) {
        res.status(411).json({ msg: "you sent wrong inputs" })
        return;
    }
})
