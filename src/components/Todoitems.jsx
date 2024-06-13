import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

function Todoitems({text, id, isComlete, deleteTodo, toggle}) {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div
        onClick={()=>{toggle(id)}}
        className='flex flex-1 items-center cursor-pointer'
        >
        <img 
            className='w-7'
            src={isComlete ? tick : not_tick} 
            alt="" 
            loading='lazy'
        />
        <p className={`tex-slate-700 ml-4 text-[17] decotation-slate-500
            ${isComlete ? "line-through" : ""}`}>
            {text}    
        </p>
      </div>

    <img
        className='w-3.5 cursor-pointer' 
        src={delete_icon} 
        alt="delete_icon"
        loading='lazy'
        onClick={()=>{deleteTodo(id)}}
    />

    </div>
  )
}

export default Todoitems
