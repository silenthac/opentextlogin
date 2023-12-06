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
      

      
    }
    
    


    

   
    
    


  return (
    <div className='flex flex-col '>
        { show? <h1  onClick={()=>{fun1()}} className =' text-blue-500 font-bold cursor-pointer' >{Name}</h1>:<h1 onClick={()=>{fun1();fun2({Name})}} className ='font-bold cursor-pointer'>{Name}</h1>}

        { show&& <h1 className='text-gray-600'>{ele.map((e)=>{return <h1>{e}</h1> } ) }</h1>}
        

    </div>
  )
}

export default NewComp