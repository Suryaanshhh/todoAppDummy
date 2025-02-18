const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Suryansh:nl4n45P8gdN6EPyf@cluster0.jheot.mongodb.net/TODO_APP");

const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    isCompleted:Boolean
});

const todo=mongoose.model("todo",todoSchema);

module.exports={
    todo
}