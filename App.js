import {useState, useEffect} from 'react'
import './App.css';
import { TaskCreator } from './componets/TaskCreator'

function App() {

const [tasksItems, setTasksItems] = useState([
  {name: 'mi primer tarea', done: false},
  {name: 'mi segunda tarea', done: false},
  {name: 'mi tercera tarea', done: false},
])

function createNewTask(taskName) {
 if (!tasksItems.find(taks => taks.name === taskName)) {
  setTasksItems([...tasksItems, {name: taskName, done: false}])
 }
}

useEffect(() => {
console.log('cambio')
},[ tasksItems ])

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask}/>

<table>
  <thead>
    <tr>
<th>task</th>
    </tr>
  </thead>
  <tbody>
  {
        tasksItems.map(task => (
           <tr key={task.name}>
           <td>
           {task.name}
           </td>
           </tr>
        ))
      }

  </tbody>
</table>


    </div>
  );
}

export default App;