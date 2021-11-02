import React from "react";
import "../styles/header.css";
const Header = ({handleCompletedTodo, handleIncompletedTodo, handleStatus}) => {

    const localHandleAllTodo = () =>{
        handleStatus("all");
    }


    const localHandleCompletedTodo = () =>{
        handleCompletedTodo();
        handleStatus("completed");
    }

    const localHandleIncompletedTodo = () =>{
        handleIncompletedTodo();
        handleStatus("incompleted");
    }
return (
    <div className="header">
        <h1>To Do List</h1>
        <div className="list">
            <button className="todo" onClick={localHandleAllTodo} >To Do</button>
            <button className="incompleted" onClick = {localHandleIncompletedTodo}>Incompleted</button>
            <button className="completed" onClick = {localHandleCompletedTodo}>Completed</button>
        </div>        
    </div>
);
}

export default Header;