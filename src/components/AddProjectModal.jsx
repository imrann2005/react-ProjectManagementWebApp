import React,{useRef} from "react";
import { createPortal } from "react-dom";
import Input from "./Input";

export default function AddProjectModal({onAddProject,onSave,onCancel}) {

    const titleRef = useRef();
    const descRef = useRef();
    const dueDateRef = useRef();

    return (
        <div className=" w-[35rem] mt-16 py-4 px-2 shadow-md m-auto">
            <ul className=" flex items-center justify-end my-4 gap-4 mx-2">
                <li><button className=" hover:text-slate-500 p-3 rounded-md text-white bg-stone-800" onClick={()=>onSave(titleRef.current.value,descRef.current.value,dueDateRef.current.value)}
                >Save
                </button></li>
                <li><button className=" hover:text-slate-500" onClick={onCancel}>Cancel</button></li>
            </ul>
        <Input type='text' label={'project Title'} ref={titleRef} required/>
        <Input label={'Project Description'} textarea={true} ref={descRef} required/>
        <Input type='date' label={'Due Date'} ref={dueDateRef} required/>
        </div>
    )
}