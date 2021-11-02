import React from 'react';
import "../styles/todocontainer.css";
const TodoContainer = ({title,state, handleCompleteTodo, id,handleCompletedTodo, handleIncompletedTodo , handleStatus}) => {
    const localHandleCompleteTodo = () => {
        handleCompleteTodo(id)
        if(state===false){
            handleIncompletedTodo();
            handleStatus("incompleted");
        }else{
            handleCompletedTodo();
            handleStatus("completed");
        }
    }
    return(
        <div id={id} className = 'todo-container'>
            <h2 className="key" >{id}</h2>
            <h2 className = "title">{title}</h2>
            <button className={state ? "complete" : "reset"}
          onClick={localHandleCompleteTodo}>
              {state ? "Reset" : "Complete"}
          </button>
        </div>
    );
}

export default TodoContainer;