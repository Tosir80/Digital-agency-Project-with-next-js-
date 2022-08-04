import React, { useEffect, useState } from 'react';
 import {Image} from 'next/image'


const Services = () => {
  const [img,setImg]=useState([])
    useEffect(()=>{
      fetch('/api/services/services')
      .then(res=>res.json())
      .then(data=>setImg(data))
    },[])
    console.log(img);
    return (
        <section>
           <div className="text-center py-5 " >
               <h5 className=" bg-pink-200 inline rounded-lg px-3 p-1">Our Solutions</h5> 
               <h2 className="pt-5">Our Services</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
           
         <div className="service container px-7 grid grid-cols-2  md:grid-cols-3 gap-6 py-5">
    
          {img.map((img)=><div key={img.name} className=" border-none rounded-lg relative">
            <div className=''>
            <img className='rounded-lg shadow' src={img.src} alt="" />
            </div>
            <div className='hidden md:block transition-all ease-in-out duration-700 ml-2 block mx-auto bottom-1 absolute text-center  hover:bottom-2 hover:pt-1  bg-white rounded-lg  p-2 animate-bounce '>
                <h4 className='  text-2xl text-center  '>{img.name}</h4>
            </div>
          </div>
           
          )}
         
        </div>

        </section>
    );
};

export default Services;