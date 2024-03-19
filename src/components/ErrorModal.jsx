import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';


const ErrorModal = forwardRef(function ErrorModal({children,btnCaption},ref) {
 
    const dialogRef=useRef();
    useImperativeHandle(ref,()=>{
        return {
            open (){
                dialogRef.current.showModal();
            }
        }

    })

    

  return createPortal((
  <dialog ref={dialogRef} className=' backdrop:bg-stone-900/90 rounded-md shadow-md px-4 py-2'>
    {children}
    <form method="dialog">
        <Button>
            {btnCaption}
        </Button>
    </form>
  </dialog>),document.getElementById('modal-root')
  )
}
)

export default ErrorModal