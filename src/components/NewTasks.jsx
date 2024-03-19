import React, { forwardRef } from 'react'
import Button from './Button'

const NewTasks = forwardRef(({onAddTask},ref) => {
  return (
    <div>
        <input type='text' className=' w-64 rounded-sm py-1 px-2 my-1 mx-1 bg-slate-200 ' ref={ref}/>
        <Button onClick={onAddTask}>
            Add Task
        </Button>
    </div>
  )
}
)
export default NewTasks;