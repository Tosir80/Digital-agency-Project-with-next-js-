import Link from 'next/link'
import { useState } from 'react';
import { AiOutlineBars ,AiOutlineClose} from 'react-icons/ai';
import { useRouter } from 'next/router';
const Navbar = () => {

    let Links=[
        {name:"HOME", link:'/'},
        {name:"SERVICE", link:'/service'},
        {name:"ABOUT", link:'/about'},
        {name:"BLOG", link:'/blog'},
        {name:"CONTACT", link:'/contact'}
    ]


 const [open, setOpen] = useState(false)

// active class add 
const router = useRouter();



  return (
    <div className= 'fixed z-50 shadow-md w-full  top-0 left-0 bg-white ' >
     <div className=" container mx-auto md:flex  py-4 md:px-10 px-7 justify-between items-center ">
        <div className=" text-blue-800 text-2xl cursor-pointer flex  items-center font-[poppins]   ">
        Digital Agency
        </div>

        {/* bar----- */}
        <div onClick={()=>setOpen(!open)} className='text-2xl text-gray-700 absolute right-8 top-5 md:hidden cursor-pointer '>
            {open? <AiOutlineClose className='text-blue-800 '/> : <AiOutlineBars className='text-blue-800  ' /> }
        </div>

        {/* ul li item------ */}
         <ul className={` bg-blue-800 md:bg-white md:text-blue-800 text-white  md:bg-blue-800 md:flex md:items-center md:py-0 pb-6 absolute md:static  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
          ${open ? 'top-15 opacity-100 ': 'top-[-490px]' } md:opacity-100  }
         ` } >
        
            {
            Links.map((link)=>(
            <li onClick={()=>setOpen(false)} key={link.name} className="md:ml-8   md:my-0 my-7 ">
                <Link href={link.link}>
                    <a className={` transition-all ease-in  duration-500  ${router.pathname==link.link? 'active': ''} `} >{link.name}</a>
                </Link>
            </li>
            ))
            }
            {/* button========= */}
            <button className= ' md:ml-2 hover:bg-blue-900 hover:text-white p-[2px]  px-3 rounded-md md:text-[20px]  border-solid border-2 border-sky-500'>Get Started</button>
         </ul>
         
     </div>
    </div>
  )
}

export default Navbar
