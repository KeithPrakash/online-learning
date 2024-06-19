import Logo from "../assets/logo.png"
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
const Home = () => {
  return (
    <div className='h-screen w-full  '>
  <nav className=" px-20 w-full mx-4 flex justify-between border-b drop-shadow-md py-3">
<div>
    <img src={Logo}  className="h-16"  />
</div>

<div className="flex items-center justify-end "> 
    <ul className="gap-4  text-slate-700   flex ">
        
    <Popover>
          <PopoverButton className=" p-2 rounded-md bg-blue-500 text-white outline-none ">
       Account
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              anchor="bottom"
              className="divide-y divide-white/5 rounded-xl bg-slate-500 text-sm/6 [--anchor-gap:var(--spacing-5)]"
            >
              <div className="p-3">
                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Edit Account Details</p>
                 
                </a>
                
                
              </div>
              <div className="p-3">
                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Logout</p>
               
                </a>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>
    </ul>
</div>
  </nav> 

  <section id="hero">
  <div className="p-20 flex w-full flex-col gap-3">
         <h1 className="text-xl lg:text-5xl font-semibold text-black leading-loose">Welcome to the </h1>
         <h1 className="text-xl lg:text-5xl font-semibold text-blue-600 leading-loose">Learning Revolution </h1>

         <p className="text-slate-400 text-sm font-thin eading-loose sm:w-full md:w-1/2 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, a architecto modi illo tenetur quas ab quasi magnam est necessitatibus, esse in. Doloribus.</p>
</div>
  </section>

  <section id="course" className="flex  bg-blue-500"> 
 <div className="p-20">
 <div className=" py-3 px-7 rounded-full bg-white/80 font-semibold text-xl md:text-2xl text-blue-600">All <span className=" text-blue-600"> Courses</span></div>
 </div>
   

  </section>


    </div>
  )
}

export default Home