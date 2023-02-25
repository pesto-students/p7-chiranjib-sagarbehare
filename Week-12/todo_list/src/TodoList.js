import React from "react";

class TodoList extends React.Component {
    constructor() {
        super();
        
        this.state = {
            todos: ["Break Fast", "Lunch", "Snaks", "Dinner"],
            //isClicked

        };
    }
    
    addNewTodo = () => {
        let newItem = document.getElementById("newItem").value;
        let {todos} = this.state;
        todos.push(newItem);
        this.setState({todos:todos});
        
        document.getElementById("newItem").value = '';
    };
    
    removeTodo = (test) => {
        console.log("sfsf ", test);
        let {todos} = this.state;
        const index = todos.indexOf(test);
        todos.splice(index, 1);

        this.setState({todos:todos});
    }
    

    render() {
        return(
            <>
                <div style={{textAlign: "center"}}>
                <input type="text" id="newItem" placeholder="New Todo here..." />
                <button onClick={this.addNewTodo} style={{backgroundColor:"skyblue" }}> Add Todo </button>
                {
                    this.state.todos.map(todo => <ul><input type="checkbox" />{todo} 
                    {<img src="https://img.icons8.com/windows/32/null/trash.png" width={"20px"} height={"20px"}  alt="Delete" onClick={(event)=> this.removeTodo(event)}/>}
                    </ul>)
                }
                </div>
            </>
        );
    }
}

export default TodoList;