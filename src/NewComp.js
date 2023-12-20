import React, { useState } from 'react'
import { addTodo } from './todoSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// onClick={()=>setshow(!show)}



const NewComp = ({Name,ele}) => {
    const [show,setshow] = useState(false)
    const [tempdata,settempdata] = useState([]);
    const [data,setdata] = useState('')
    // console.log(data.Name);
    const dispatch = useDispatch()
    


    const fun1 = () =>{
      setshow(!show);
      
    }

    const fun2 = (temp) =>{
      setdata(temp)
      dispatch(addTodo(temp.Name))
      // localStorage.setItem("REALIP":)
      

      
    }
    
    


    

   
    
    


  return (
    <div className='flex flex-col '>
        {/* { show? <h1  onClick={()=>{fun1()}} className =' text-blue-500 font-bold cursor-pointer' >{Name}</h1>:<h1 onClick={()=>{fun1();fun2({Name})}} className ='font-bold cursor-pointer'>{Name}</h1>} */}

     {  show? <button  onClick={()=>{fun1()}} type="button" class="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-blue-900 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" >
             <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{Name}</span>
              <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>:<button  onClick={()=>{fun1();fun2({Name})}} type="button" class="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-blue-900 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
             <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{Name}</span>
             <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
             </button>
}


        { show&& <h1 className=' items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group  dark:text-white dark:hover:bg-gray-700 pl-11'>{ele.map((e)=>{return <h1 className='items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-blue-900 dark:text-white dark:hover:bg-gray-700 pl-11'>{e}</h1> } ) }</h1>}
        

    </div>
  )
}

export default NewComp