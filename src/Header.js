import React from 'react'
import Comp1 from './Comp1'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'


const Header = () => {
    const dispatch = useDispatch()
  return (
    <div className='flex m-2'>
        <button onClick={()=>dispatch(addTodo("Infrastructure"))} className='border border-black m-2 p-1'>Infrastructure</button>
        <h1 onClick={()=>dispatch(addTodo("Archive"))} className='border border-black m-2 p-1'  >Archive</h1>
        <h1  onClick={()=>dispatch(addTodo("Environment"))} className='border border-black m-2 p-1' >Environment</h1>
        <h1 onClick={()=>dispatch(addTodo("System"))} className='border border-black m-2 p-1'>System</h1>
        <h1  onClick={()=>dispatch(addTodo("Configuration"))}className='border border-black m-2 p-1'>Configuration</h1>
        

    </div>
  )
}

export default Header