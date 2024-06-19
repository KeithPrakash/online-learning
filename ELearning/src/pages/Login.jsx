
import Logo from "../assets/logo.png"
const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-300 rounded-xl ">
       <div className="border rounded  p-5  bg-white  w-[360px]">
          <div className="mx-auto w-full">
            <img src={Logo} className="h-32 mx-auto" alt="" />
          </div>
          <div className="p-4 flex flex-col gap-7 ">
              
           <input type="text"  className="border-2 p-2 rounded-md" placeholder="email" />
              
           <input type="password"  className="border-2 p-2 rounded-md" placeholder="password"/>
       <button className="p-2 w-full bg-slate-500 rounded-md text-white font-semibold"> Login</button>
          </div>
<div className="border my-4 w-full"></div>
          <div className=" flex justify-center">
       <p>Don't have an Account? <span className="underline text-slate-700"> Register</span></p> 
          </div>
       </div>
    </div>
  )
}

export default Login