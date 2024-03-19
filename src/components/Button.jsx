import React from 'react'

const Button = ({children,...props}) => {
  return (
  
    <button {...props} className='text-slate-100 hover:text-slate-200 bg-zinc-400 hover:bg-zinc-500 text-xs md:text-base rounded-md my-4 mx-4 py-2 px-2'>
    {children}
    </button>
    
  )
}

export default Button