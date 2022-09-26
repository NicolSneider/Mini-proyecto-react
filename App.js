import { useState, useEffect } from 'react'
import './App.css';
import { TaskCreator } from './componets/TaskCreator'
import { TaskTable } from './componets/TaskTable'

function App() {

  const [tasksItems, setTasksItems] = useState([])

  function createNewTask(taskName) {
    if (!tasksItems.find(taks => taks.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = taks => {
    setTasksItems(

      tasksItems.map(t => (t.name == tasksItems.name) ? { ...t, done: !t.done } : t)
    );
  };

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('taks', tasksItems, JSON.stringify(tasksItems))
  }, [tasksItems])

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask ={toggleTask} />
    </div>
  );
}

export default App;