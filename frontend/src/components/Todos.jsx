export function Todos({todos}) {
    return <div>
       {
        todos.map((todo)=>{
            return <div>
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                <button>{todo.isCompleted==true?"Completed":"Mark As Done"}</button>
            </div>
        })
       }
    </div>
}