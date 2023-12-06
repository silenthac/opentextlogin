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
    <div className='  h-screen' style={{background:"linear-gradient(45deg, rgb(9, 14, 44) 0%, rgb(18, 44, 105) 58.93%, rgb(7, 141, 179) 100%)"}}>
        <div className='w-full  max-w-xl mx-auto  pt-20  my-auto border-black  '>
            <p className='m-2  ml-20 text-3xl font-bold text-white'>Opentext Administration  Client</p>
            <div className='flex justify-center items-center'>
            <p className='m-10  ml-20 text-white text-md font-bold'><b>Opentext</b><sup>TM </sup>&nbsp;|&nbsp;Administation Client{" "}{" "}<sub>CE 24.1</sub></p>
            </div>
            <div className='flex justify-evenly p-5 '>
            <p className='text-white text-md font-bold text-m'>Server</p>
            <input  className='border-black  px-3 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' type='text' value={IPaddress} onChange={(e)=>{setIPaddress(e.target.value)}}/>
        </div>
        

        <div className='flex justify-evenly  p-5 '>
            <p className='text-white text-md font-bold text-m'>Username</p>
            <input  className='border-black  px-3 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mr-3' type='text' value={Username} onChange={(e)=>{setUserName(e.target.value)}}/>
        </div>

        <div className='flex justify-evenly  p-5'>
            <p className='text-white text-md font-bold text-m'>Password</p>
            <input  className='border-black  px-3 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mr-2' type='password' value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
           
        </div>
        {!isAllowed&& <p className='text-red-500'>Your credentials are wrong!!!</p>}

        {/* {!isAllowed && alert("Your credentials are wrong")} */}
       
        

       
    

        <div className='flex justify-center items-center p-5  mr-20 mt-2'>
            <button onClick={()=>{fun1(IPaddress);}} className='bg-transparent hover:bg-blue-500 text-white ml-2 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded'>Sign In</button>
            <button  onClick={()=>{fun2()}} className='bg-transparent hover:bg-blue-500 text-white ml-2 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded'>Cancel</button>
            {/* <button  onClick={()=>{fun2()}} className='border  bg-gray-200 border-black px-7 rounded-md hover:border-blue-400'>Cancel</button> */}
        </div>
        
        

    </div>
    </div>
    
  )
}

export default Login