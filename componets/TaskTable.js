import {TaskRow} from './TaskRow'
export const TaskTable = ({tasks, toggleTask}) => {
    
    
    const TaskTableRows = () => {
        return (
        tasks.map(task => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
          ))
     )
    }
    
    return (
        <table>
  <thead>
    <tr>
<th>task</th>
    </tr>
  </thead>
  <tbody>
  {
        
      }

  </tbody>
</table>
    )
}