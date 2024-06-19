import React from 'react'
import Logo from "../assets/logo.png"


const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-300 rounded-xl ">
    <div className="border rounded  p-5  bg-white  w-[360px]">
       <div className="mx-auto w-full font-semibold text-xl  text-slate-600  text-center p-4">
           Register
       </div>
       <div className="p-4 flex flex-col gap-7 ">
           
        <input type="text"  className="border-2 p-2 rounded-md" placeholder="username"  rel=''/>
           
           
        <input type="text"  className="border-2 p-2 rounded-md" placeholder="address"  required/>
           
           
        <input type="text"  className="border-2 p-2 rounded-md" placeholder="number"  required/>
           
        <input type="text"  className="border-2 p-2 rounded-md" placeholder="email"  required/>
           
        <input type="password"  className="border-2 p-2 rounded-md" placeholder="password" required/>
         
          <button className="p-2 w-full bg-slate-500 rounded-md text-white font-semibold">Register</button>
       </div>
           <div className="border my-4 w-full"></div>
       <div className=" flex justify-center">
    <p>Don't have an Account? <span className="underline text-slate-700"> Login</span></p> 
       </div>
    </div>
 </div>
)
  
}

export default Register