import React from 'react';
import noProjectsImg from '../assets/no-projects.png';
import Button from './Button';

const NoProjectSelected = ({onAddProject}) => {
    return (
        <div className=' w-2/3 mt-24 text-center'>
            <img className='w-16 h-16 object-contain mx-auto' src={noProjectsImg} alt="No-project-selected-image" />
            <h2 className='text-xl text-bold text-stone-500 my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-2 mt-2'>Select a project or get started with a new one</p>
            <p className='mb-2'><Button onClick={onAddProject}>Create Project Now</Button></p>
        </div>
    )
}

export default NoProjectSelected;