import React from 'react'
import Tasks from './Tasks';

const SelectedProject = ({ projectTitle, projectDescription, projectDueDate,id,onDelete }) => {

    const formattedDate = new Date(projectDueDate).toLocaleDateString('en-US',{
        year : 'numeric',
        month : 'short',
        day : 'numeric'
    })
    return (
        <div className=' w-[35rem] mt-8 mx-8 px-2 py-4'>
            <header className='pb-4 mb-4 border-b-2 border-stone-300 px-2'>
                <div className=' flex items-center justify-between '>
                    <h1 className=' text-3xl font-bold text-stone-800 mb-2 '>{projectTitle}</h1>
                    <button className=' text-stone-400 hover:text-stone-600' onClick={()=>onDelete(id)}>Delete</button>
                </div>
                <p className='mb-4 text-stone-400 '>{projectDescription}</p>
                <p className='text-stone-600 whitespace-pre-wrap'>{formattedDate}</p>
            </header>
            <main className=' my-2 px-2 py-2 '>
                <Tasks />
            </main>
        </div>
    )
}

export default SelectedProject;