import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import './Todo.css';

export const Todo = () => {

  const [todo ,setTodo] = useState();
  const [todoList , setTodoList] = useState([]);

  useEffect(()=>{
    const userTodo = JSON.parse(localStorage.getItem("todo"));
    userTodo && setTodoList(userTodo);
  },[])

  const handleTodoInputChange = (event)=>{
    setTodo(event.target.value)
  }

  const handleTodoEnterKey =(event)=>{
    if(event.key === "Enter"){
      const updatedTodoList = [...todoList,{_id: uuid(), todo, isCompleted : false}];
      setTodoList(updatedTodoList);
      setTodo("");
      localStorage.setItem("todo", JSON.stringify(updatedTodoList));
    }
  }

  const handleTodoCheckChange = (todoId)=>{
    const updatedTodoList = todoList.map(todo => todoId === todo._id ? {...todo,isCompleted: !todo.isCompleted} : todo)
    setTodoList(updatedTodoList);
    localStorage.setItem("todo" , JSON.stringify(updatedTodoList));
  }

  const handleTodoDeleteClick =(todoId)=>{
    const updatedTodoList = todoList.filter(({_id}) => _id !== todoId);
    setTodoList(updatedTodoList);
    localStorage.setItem("todo" , JSON.stringify(updatedTodoList));
  }

  return (
    <div className="todo-container absolute">
      <div className="todo-input-container">
        <input value ={todo} className = "todo-input" onChange={handleTodoInputChange} onKeyPress={handleTodoEnterKey} placeholder = "add a todo here ...."/>
      </div>

      <div className="todo-list">
        {
          todoList && todoList.map(({todo , _id , isCompleted}) =>{
            return(
              <div key={_id} className="todo-items d-flex align-center">
                <label className={`${isCompleted ? "strike-through" : ""} todo-label`}> <input className ="todo-check" type="checkbox" onChange={()=> handleTodoCheckChange(_id)} checked = {isCompleted}/> {todo}</label>
                <button className="button cursor todo-clear-btn" onClick={()=> handleTodoDeleteClick(_id)}>
                        <span class="material-icons-outlined">
                            delete
                        </span>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}