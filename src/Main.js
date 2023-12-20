import React, { useRef, useState } from 'react'


import Main1 from './Main1';
import Main3 from './Main3';
import Comp1 from './Comp1';
import Main2 from './Main2';
import { useSelector } from 'react-redux';
import Header from './Header';
import { data } from './DummyApi2';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

//  setSearchval(e.target.value)








const Main = () => {
    const [searchval,setSearchval] = useState('')
    const tempdata = useSelector(state =>state.str)
    const dispatch = useDispatch()
    console.log(tempdata);
    
    const inputRef = useRef(null);
    console.log(inputRef.current)  
    
    return (
        <div class="flex">
            <Main1/>
            
            <div class="w-1/2 min-h-screen rounded-5xl " >
                <Header/> 
            
    <div className='flex justify-center'>
            <input className=  'items-center mb-5 pl-2  mr-5 border border-black rounded-lg' placeholder='Search' type='text' value={searchval} onChange={(e)=>{dispatch(addTodo(e.target.value));setSearchval(e.target.value)}}  />
            

        </div>
        {
            data.map((d)=>{
                if(d.Name==tempdata)
                {
                    return <Main2 key={d.id} {...d}/>

                }
                
            })
        }
                
            </div>
            <Main3/>
            
           
        </div>
    )
}

export default Main;