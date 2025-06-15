
import { useState } from 'react';
import './App.css';

function App() {
  const [isCompleteScreen,setIsCompletedScreen]=useState(false);
  return (
    <div className='App'>
      <h1>My Todo</h1> 
      <div className='todo-wrapper'>
        <div className='todo-input'> 
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text' placeholder='what is task title?'></input>
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' placeholder='what is task title?'></input>
          </div>
          <div className='todo-input-item'>
            <button type='button' className='primaryBtn'>Add</button>
          </div>
              </div>
              <div className='btn-area'>
            <button className = {`secondaryBtn ${isCompleteScreen ===false && 'active'}`} onClick={()=>setIsCompletedScreen(false)}>Todo</button>
            <button className={`secondaryBtn ${isCompleteScreen ===false && 'active'}`}onClick={()=>setIsCompletedScreen(true)}>Completed</button>
            
          </div>
           <div className='todo-list'>
             <div className='todo-list-item'>
                <h3>Task1</h3>
                <p>Description</p> 
            </div>
            
        </div>
      </div>
    </div>  
  );
}

export default App;
