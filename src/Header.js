import React from 'react'
import Comp1 from './Comp1'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'


const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex m-2 justify-center'>
      <button onClick={() => dispatch(addTodo("Infrastructure"))} className='border border-black m-2 p-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'  style={{background:"linear-gradient(45deg, rgb(9, 14, 44) 0%, rgb(18, 44, 105) 58.93%, rgb(7, 141, 179) 100%)"}}>Infrastructure</button>
      <button onClick={() => dispatch(addTodo("Archive"))} className='border border-black m-2 p-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'  style={{background:"linear-gradient(45deg, rgb(9, 14, 44) 0%, rgb(18, 44, 105) 58.93%, rgb(7, 141, 179) 100%)"}}  >Archive</button>
      <button onClick={() => dispatch(addTodo("Environment"))} className='border border-black m-2 p-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'  style={{background:"linear-gradient(45deg, rgb(9, 14, 44) 0%, rgb(18, 44, 105) 58.93%, rgb(7, 141, 179) 100%)"}} >Environment</button>
      <button onClick={() => dispatch(addTodo("System"))} className='border border-black m-2 p-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'  style={{background:"linear-gradient(45deg, rgb(9, 14, 44) 0%, rgb(18, 44, 105) 58.93%, rgb(7, 141, 179) 100%)"}}>System</button>
      <button onClick={() => dispatch(addTodo("Configuration"))} className='border border-black m-2 p-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'  style={{background:"linear-gradient(45deg, rgb(9, 14, 44) 0%, rgb(18, 44, 105) 58.93%, rgb(7, 141, 179) 100%)"}}>Configuration</button>


    </div>
  )
}

export default Header