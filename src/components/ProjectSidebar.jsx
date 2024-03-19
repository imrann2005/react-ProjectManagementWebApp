import React, { useState } from 'react';
import Button from './Button';

export default function ProjectSidebar({handleAddProject,projectList,onselect,selectedProjectId}) {

    // const [projectList, setProjectList] = useState([]);

    return (
        <div className='min-h-full flex-col items-center basis-1/4 bg-black mt-8 ml-4 rounded-md shadow-md'>

            <div className='flex flex-col items-center'>
                <h2 className='text-amber-50 font-bold text-center md:tracking-wide md:text-xl my-4 uppercase'>Your Projects</h2>
                <Button onClick={handleAddProject}>{'+ Add Project'}</Button>
                <ul className='flex flex-col gap-4'>
                    {
                        projectList.map((project, index) => {
                            let cssClasses = 'text-slate-200 hover:text-slate-400 hover:cursor-pointer '
                            if(selectedProjectId === project.id){
                                cssClasses += ' text-slate-400'
                            }
                            else{
                                cssClasses += ' '
                            }
                            return (
                                <li  key={project.id} className={cssClasses}>
                                <button onClick={()=>onselect(project.id)}>{project.title}</button> 
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}