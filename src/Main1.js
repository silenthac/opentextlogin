import React from 'react';
import  { useState } from 'react'
import NewComp from './NewComp';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

import { useSelector } from 'react-redux';

import { Services } from './DummyApi';
const Main1 = () => {
    const [data, setdata] = useState(Services);
    const [state1,setstate1] = useState(false);
    const [state2,setstate2] = useState(false);
    const [statebet,setstatebet] = useState(false);
    const [state3,setstate3] = useState(false);
    const dispatch = useDispatch();

    const  val = useSelector((state) =>state.IP)
  return (
    
        <div class="w-1/4 rounded-xl border min-h-screen border-black   shadow-lg shadow-blue-400  " style={{background:"linear-gradient(45deg, rgb(9, 14, 44) 0%, rgb(18, 44, 105) 58.93%, rgb(7, 141, 179) 100%)"}}>
                <div className='flex m-2'>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512"><path d="M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8 .1-113.8-90.2-203.3-202.8-203.3zm101 132.4c7.8 0 13.7 6.1 13.7 13.7v182.5c0 7.7-6.1 13.7-13.7 13.7H214.3c-7.7 0-13.7-6-13.7-13.7v-54h-54c-7.8 0-13.7-6-13.7-13.7V131.1c0-8.2 6.6-12.7 12.4-13.7h136.4c7.7 0 13.7 6 13.7 13.7v54h54zM159.9 300.3h40.7V198.9c0-7.4 5.8-12.6 12-13.7h55.8v-40.3H159.9v155.4zm176.2-88.1H227.6v155.4h108.5V212.2z" /> </svg>
                    <p className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example'  onClick={()=>setstate1(!state1)} >Shared Services</p> */}
                    <button  onClick={()=>{setstatebet(!statebet)}} type="button" class="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-blue-900 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Shared Services</span>
                  <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                    
                </div>

               {  statebet&&<div className='flex m-2'>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512"><path d="M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8 .1-113.8-90.2-203.3-202.8-203.3zm101 132.4c7.8 0 13.7 6.1 13.7 13.7v182.5c0 7.7-6.1 13.7-13.7 13.7H214.3c-7.7 0-13.7-6-13.7-13.7v-54h-54c-7.8 0-13.7-6-13.7-13.7V131.1c0-8.2 6.6-12.7 12.4-13.7h136.4c7.7 0 13.7 6 13.7 13.7v54h54zM159.9 300.3h40.7V198.9c0-7.4 5.8-12.6 12-13.7h55.8v-40.3H159.9v155.4zm176.2-88.1H227.6v155.4h108.5V212.2z" /> </svg>
                    <p className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example'  onClick={()=>setstate1(!state1)} >Shared Services</p> */}
                    <button  onClick={()=>{setstate1(!state1);setstate2(!state2)}} type="button" class="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-blue-900 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{localStorage.getItem("IPaddress")}</span>
                  <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                    
                </div>
}
                {/* {state1&&<p onClick={()=>setstate2(!state2)} className='pl-7 cursor-pointer'>Archive Server</p>} */}
                
				{state1&& statebet&&
               <div className=' pl-3 flex m-2'>
               
               <button  onClick={()=>setstate2(!state2)} type="button" class="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-blue-900 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
             <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Archive Servers</span>
             <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
             </button>
                
               
           </div>
}

                { state1&& state2&& statebet&& <div className='flex flex-col ml-12 '>
                    {
                        data.map((d)=>{
                            
                            return <NewComp key = {d.id} {...d}/>
                        })
                    }
                    

                    

                    </div>}

            </div>
    
  )
}

export default Main1