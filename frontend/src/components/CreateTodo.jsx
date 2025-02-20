import { useState } from "react";

export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    return (
        <div>
            <input type="text" placeholder="title" onChange={function (e) {
                setTitle(e.target.value)
            }}></input>
            <br></br>
            <input type="text" placeholder="description" onChange={function (e) {
                setdescription(e.target.value)
            }}></input>
            <br></br>
            <button onClick={() => {
                fetch("http://localhost:3000/createTodo", {
                    method: "POST",
                    body: JSON.stringify(
                        {
                            title: title,
                            description: description,
                        }
                    ),
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(async function (res) {
                    const todoJson = await res.json();
                    alert("TodoCreated")
                }).catch((err)=>{
                    console.log(err)
                })
            }}>Add a Todo</button>
        </div>
    )
}