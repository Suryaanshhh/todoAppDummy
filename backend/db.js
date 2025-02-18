const mongoose=require("mongoose");
mongoose.connect(process.env.MONGODB);

const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    isCompleted:Boolean
});

const todo=mongoose.model("todo",todoSchema);

module.exports={
    todo
}