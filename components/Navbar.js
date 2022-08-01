import Link from 'next/link'
import { useState } from 'react';
import { AiOutlineBars ,AiOutlineClose} from 'react-icons/ai';
const Navbar = () => {

    let Links=[
        {name:"HOME", link:'/'},
        {name:"SERVICE", link:'/service'},
        {name:"ABOUT", link:'/about'},
        {name:"BLOG", link:'/blog'},
        {name:"CONTACT", link:'/contact'}
    ]


 const [open, setOpen] = useState(false)

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
     <div className="md:flex bg-white py-4 md:px-10 px-7 justify-between items-center ">
        <div className="text-2xl cursor-pointer flex  items-center font-[poppins] text-fuchsia-900  ">
            TOsir
        </div>

        {/* bar----- */}
        <div onClick={()=>setOpen(!open)} className='text-2xl text-gray-700 absolute right-8 top-5 md:hidden cursor-pointer '>
            {open? <AiOutlineClose/> : <AiOutlineBars /> }
        </div>

        {/* ul li item------ */}
         <ul className={` md:flex md:items-center md:py-0 pb-6 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
          ${open ? 'top-10 opacity-100 ': 'top-[-490px]' } md:opacity-100  }
         ` } >
        
            {
            Links.map((link)=>(
            <li onClick={()=>setOpen(false)} key={link.name} className="md:ml-8 text-xl text-black md:my-0 my-7">
                <Link href={link.link}>
                    <a className='text-gray-800 hover:text-fuchsia-500 duration-500  '>{link.name}</a>
                </Link>
            </li>
            ))
            }
            {/* button========= */}
            <button className= ' md:ml-2 hover:bg-indigo-600 hover:text-white text-indigo-500 p-1 px-3 rounded-md text-2xl border-solid border-2 border-sky-500'>Get Started</button>
         </ul>
         
     </div>
    </div>
  )
}

export default Navbar
