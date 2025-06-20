
import { useEffect, useState } from 'react';
import './App.css';
import { MdDelete } from "react-icons/md";

function App() {
  const[allTodos,setTodos]=useState([]);
  const [newTitle,setNewTitle]=useState("");
  const [newDescription, setNewDescription] = useState('');

  const handleAddTodo =()=>{
    let newTOdoItem={
      title:newTitle,
      description:newDescription
    }
    let updatedTodoArr=[...allTodos];
    updatedTodoArr.push(newTOdoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))

  };
  const handleDeleteTodo =index=>{
    let reduceTodo=[...allTodos];
    reduceTodo.splice(index);
    localStorage.setItem('todolist',JSON.stringify(reduceTodo));
    setTodos(reduceTodo);
  };

  useEffect(()=>{
    let savedTodo =JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo){
      setTodos(savedTodo);
    }
  },[])
  return (
    <div className='App'>
      <h1>My Todo</h1> 
      <div className='todo-wrapper'>
        <div className='todo-input'> 
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text'value={newTitle} onChange={(e)=>setNewTitle(e.target.value )} placeholder='what is task title?'></input>
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text'  value={newDescription} onChange={(e)=>setNewDescription(e.target.value )} placeholder='what is task title?'></input>
          </div>
          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo} className='primaryBtn'>Add</button>
          </div>
              </div>
              <div className='btn-area'>
            <button className = 'secondaryBtn'>TODOS</button>

            
          </div>
           <div className='todo-list'>
              {allTodos.map((item,index)=>{
                // {console.log(item)}
                return(
                  <div className='todo-list-item' key={index}>
              <div>
                <h3>{item.title}</h3>
                <p className='para'>{item.description} </p> 
                 </div>
          
                <div>
                   <div className='deleteBtn' onClick={()=>handleDeleteTodo(index)}><MdDelete/></div> 
                
                </div>
           </div>
                )
              })}
        </div>
      </div>
    </div>  
  );
}

export default App;
