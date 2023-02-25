import React, { useState } from "react";
import './App.css';

export default function TodoListFunction() {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);
    
    function addNewTodo() {
        if(!newTodo){
            alert("Pls enter todo");
            return;
        }
        
        const todos = {
            id: Math.floor(Math.random() * 1000),
            isChecked: false,
            value: newTodo
        };
        
        setTodos(oldList => [...oldList, todos]);
        setNewTodo('');
    }
    
    function updateTodo(i) {
        setTodos(
            todos.map(existingItem => {
                if(existingItem.id === i.id) {
                    return {...existingItem, isChecked: !i.isChecked}
                }
                return existingItem;
            })
        );
    }
    
    function removeTodo(id) {
        console.log(id);
        const filterItems = todos.filter(todos => todos.id !== id);
        console.log(filterItems);
        setTodos(filterItems);
    }
    
    return(
        <>
            <div className="App">
                <input type="text" placeholder="Add New Todo" value={newTodo} 
                    onChange={e => setNewTodo(e.target.value)} />
                <button onClick={() => addNewTodo()}>Add</button>
                
                <ul>
                    {
                        todos.map(i => {
                            return (
                                <div key={i.id}>
                                    <input type="checkbox" onClick={e => updateTodo(i)}></input>
                                    <span className={i.isChecked ? 'todo-done' : ''}  > {i.value} </span>
                                    <img className="delete-img" src="https://img.icons8.com/windows/32/null/trash.png" alt="Delete" onClick={()=> removeTodo(i.id)}></img>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
}