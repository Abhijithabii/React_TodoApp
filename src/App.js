
import './App.css';
import {useState} from 'react'

function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')
  const addTodo = ()=>{
    if (toDo.trim() === ''){
      return
    }
    if (toDos.some((todo)=>todo.text === toDo)) {
      return
    }
    setTodos([...toDos,{id:Date.now(), text:toDo, status:false}])
    setTodo('')
  

  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className='todolist'>
        <div className="subHeading">
          <br />
          <h2>Add ToDo 🌝 ☕ </h2>
        </div>
        <div className='todo_input'>
          <div className="input">
            <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
            <i onClick= {addTodo} className="fas fa-plus"></i>
          </div>
        </div>
        <div className="todos">
          {
            toDos.map((obj)=>{

            
          return ( <div className="todo">
            <div className="left">
              <input onChange={(e)=>{
                console.log(e.target.value);
                console.log(obj);
                setTodos(toDos.filter(obj2=>{
                  if (obj2.id===obj.id) {
                    obj2.status = e.target.checked
                  }
                  return obj2
                }))
              }} checked={obj.status} type="checkbox" name="" id="" />
              {obj.status?<s>{obj.text}</s>:<h4>{obj.text}</h4>}
            </div>
            <div className="right">
              <i onClick={()=>setTodos(toDos.filter(obj2=>obj2.id !== obj.id))} className="fas fa-times"></i>
            </div>
          </div>
          )
            })}
          <div>
            <div className="subHeading">
              <br />
              <h2> Completed </h2>
            </div>
            {toDos.map((obj)=>{
              if (obj.status) {
                return (<div className='todo'>{obj.text}</div>)
              }
              return null
            })}
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
