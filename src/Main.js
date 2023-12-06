import React, { useRef, useState } from 'react'


import Main1 from './Main1';
import Main3 from './Main3';
import Comp1 from './Comp1';
import Main2 from './Main2';
import { useSelector } from 'react-redux';
import Header from './Header';
import { data } from './DummyApi2';








const Main = () => {
    const [searchval,setSearchval] = useState('')
    const tempdata = useSelector(state =>state.str)
    console.log(tempdata);
    
    const inputRef = useRef(null);
    console.log(inputRef.current)  
    
    return (
        <div class="flex">
            <Main1/>
            
            <div class="w-1/2 bg-green-200 h-screen">
                <Header/>
            
    <div>
            <input className=  '  mb-5  mr-5 border border-black' type='text' value={searchval} onChange={(e)=>{setSearchval(e.target.value)}}  />
            <button className='border border-black' 
            >Search</button>

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