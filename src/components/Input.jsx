import React,{forwardRef} from 'react'

 const Input =forwardRef(function ({label,textarea,id,...props},ref)  {

  const styleClasses = 'w-full text-sm rounded-md border-b-2 border-stone-300 focus:outline-none focus:border-stone-600'

  return (
    <p className=' flex items-center mx-2 my-4 py-2 px-2 gap-4'> 
        <label className=' text-sm md:text-lg uppercase' htmlFor={id}>{label}</label>
        {!textarea ? <input ref={ref} className={styleClasses} id={id} {...props}/> : <textarea ref={ref} className={styleClasses} {...props}></textarea>}
    </p>
  )
}
 )


export default Input