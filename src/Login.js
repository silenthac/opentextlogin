import { paste } from '@testing-library/user-event/dist/paste';
import React, { useState } from 'react'
import img1 from './img/img1.jpg'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [Username,setUserName] = useState('');
    const [Password,setPassword] = useState('');
    const [IPaddress,setIPaddress] = useState('');
    const [isAllowed,setAllowed] = useState(true);
    const [isValidIP,setisValidIP] = useState(true);
    const Navigate = useNavigate();

    // console.log(Username)
    // console.log(Password)
    // console.log(IPaddress)
     console.log(isAllowed)
    // console.log(isValidIP)


    // const  validIPAddress = function(IP) {
    //     const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
    //     const ipv6 = /^([\da-f]{1,4}:){8}$/i;
    //    return  ipv4.test(IP + '.') ? setisValidIP(true) : ipv6.test(IP + ':') ? setisValidIP(true) :setisValidIP(false) ;
    // };


   const fun1 =(IP) =>{
    const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
    // ipv4.test(IP + '.') ? setAllowed(true) :setAllowed(false)

    

    if(Username!="otadmin@otds.admin" || Password!="Password@123"||ipv4.test(IP + '.')==false)
    {
        setAllowed(false);

    }
    else{

        setAllowed(true)
        Navigate('/browse')
    }

    

   }


   const fun2 = () =>
    {
        setUserName('')
        setPassword('')
    }
  return (
    <div className='mt-20 '>
        <div className='w-full max-w-xl mx-auto border border-black bg-gradient-to-l from-blue-900 z-10'>
            <p className='m-2'>Opentext Administration  Client</p>
            <p className='m-10'><b>opentext</b><sup>TM</sup>|Administation Client{" "}{" "}<sub>CE 24.1</sub></p>

            <div className='flex justify-evenly p-5 '>
            <p>Server</p>
            <input  className='border-black  px-3 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' type='text' value={IPaddress} onChange={(e)=>{setIPaddress(e.target.value)}}/>
        </div>
        

        <div className='flex justify-evenly  p-5 '>
            <p>User name</p>
            <input  className='border-black  px-3 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' type='text' value={Username} onChange={(e)=>{setUserName(e.target.value)}}/>
        </div>

        <div className='flex justify-evenly p-5'>
            <p>Password</p>
            <input  className='border-black  px-3 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' type='password' value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
           
        </div>
        {/* {!isAllowed&& <p className='text-red-500'>Your credentials are wrong!!!</p>} */}

        {!isAllowed &&<p className='text-red-500'>Your credentials are wrong</p>}

       
    

        <div className='flex justify-end p-5'>
            <button onClick={()=>{fun1(IPaddress);}} className='border bg-gray-200 border-black mr-2 px-5'>Sign In</button>
            <button  onClick={()=>{fun2()}} className='border  bg-gray-200 border-black px-5'>Cancel</button>
        </div>
        
        

    </div>
    </div>
    
  )
}

export default Login