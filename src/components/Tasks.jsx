import React, { useCallback, useState, useRef } from 'react'
import NewTasks from './NewTasks'

const Tasks = () => {
    const newTaskRef = useRef();
    const [tasks, setTasks] = useState([]);

    function handleAddTask() {
        
        setTasks((prevTasks) => {
             const taskID = Math.random();
            return (
            [
               ...prevTasks,
               {taskID : taskID,taskName : newTaskRef.current.value}
            ]
        )
            
        })
        
    }

    function handleTaskDelete(id){
        setTasks((prevList)=>{
            return ( 
                prevList.filter((task)=>task.taskID !== id)
            
            )
        })
    }


    return (
        <div>
            <h2 className=' text-xl md:text-2xl text-stone-600 my-2'>Tasks</h2>

            <NewTasks ref={newTaskRef} onAddTask={handleAddTask} />

            {tasks.length > 0 ? <ul>
                {
                    tasks.map((task, index) => {
                        return <li style={{
                            listStyle: 'none'
                        }} key={task.taskID}>
                        <button onClick={()=>handleTaskDelete(task.taskID)}>
                        {task.taskName}
                        </button>
                        </li>
                    })
                }

            </ul> : <p>There are no tasks currently</p>
            }
        </div>
    )
}

export default Tasks