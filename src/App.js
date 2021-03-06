import './App.css';
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import Loader from "./components/Loader";
import React, {useState, useEffect} from "react";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoCompleted, setTodoCompleted] = useState([]);
  const [todoIncompleted, setTodoIncompleted] = useState([]);
  const [status, setStatus] = useState("all");  

  const handleCompleteTodo = id => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleStatus = status => {
    setStatus(status);   
  }

  const handleCompletedTodo = () => {
    setTodoCompleted(
      todoList.filter(todo =>
        todo.completed === true ? todo : false       
      )      
    );
    setStatus("completed");
  }

  const handleIncompletedTodo = () => {
    setTodoIncompleted(
      todoList.filter(todo =>
        todo.completed === false ? todo : false       
      )      
    );
    setStatus("incompleted");
  }

  const allTodo = () => {
    return (todoList && todoList.length > 0 ? (
      todoList.map(todoList =>(
        <TodoContainer 
        key = {todoList.id} 
        title ={todoList.title} 
        state = {todoList.completed} 
        handleCompleteTodo={handleCompleteTodo} 
        id={todoList.id}
        handleCompletedTodo={handleCompletedTodo} 
        handleIncompletedTodo={handleIncompletedTodo} 
        handleStatus={handleStatus}/>
        ))
      ):(
        <Loader/>
      ));
    }

  const completedTodo = () => {
    return (todoCompleted && todoCompleted.length > 0 ? (
      todoCompleted.map(todoCompleted =>(
      <TodoContainer 
        key = {todoCompleted.id} 
        title ={todoCompleted.title} 
        state = {todoCompleted.completed} 
        handleCompleteTodo={handleCompleteTodo} 
        id={todoCompleted.id} 
        handleCompletedTodo={handleCompletedTodo} 
        handleIncompletedTodo={handleIncompletedTodo} 
        handleStatus={handleStatus}/>
      ))
      ):(
        <Loader/>
      ));
  }

  const incompletedTodo = () => {
    return (todoIncompleted && todoIncompleted.length > 0 ? (
      todoIncompleted.map(todoIncompleted =>(
        <TodoContainer 
          key = {todoIncompleted.id} 
          title ={todoIncompleted.title} 
          state = {todoIncompleted.completed} 
          handleCompleteTodo={handleCompleteTodo} 
          id={todoIncompleted.id}
          handleCompletedTodo={handleCompletedTodo} 
          handleIncompletedTodo={handleIncompletedTodo} 
          handleStatus={handleStatus}/>
        ))
        ):(
          <Loader/>
        ));
  }  

  useEffect(() => {
      const handleTodoListAPI = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const result = await response.json();
        const array = await result.filter((x,i) => i<20?x:false);
        await setTodoList(array);
      }      
      handleTodoListAPI()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
      <div className="App">
        <Header handleCompletedTodo={handleCompletedTodo} handleIncompletedTodo={handleIncompletedTodo} handleStatus={handleStatus}/>
        <div className="container"> 
        {status ==="all"? allTodo() : status ==="completed" ? completedTodo(): status ==="incompleted" ? incompletedTodo() :(<Loader/>)}
        </div>      
      </div>
    );  
}

export default App;
