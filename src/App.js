import React, { useState } from 'react';

/// Modifica el componente para que se puedan agregar tareas

const App = () => {

const [task, setTask] = useState([])
const [value, setValue] = useState('')
  
  const handleSubmit = (x) =>{
    x.preventDefault()
    setTask(task.concat(value))
    setValue('')
  }
  
  const handlerChange = (evento) => {
    setValue(evento.target.value)
    // if(evento.keyCode === 13){
    //   console.log(task.concat(evento.target.value))
    // }
  }



  
  return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {
              task.map((task, indice) => {
              return <li key={indice}>{task}</li>
              })
            }
          </ul>
           <form onSubmit={handleSubmit}>
             <input type="text" id="new-task" value={value} onChange={handlerChange} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
}

export default App;
