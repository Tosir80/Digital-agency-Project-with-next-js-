
import Image from "next/image";

import { AiOutlineFundProjectionScreen ,AiOutlinePlusCircle } from 'react-icons/ai';
const Features = () => {
    return (
        <section className="relative py-5  mx-auto ">
            <div className="text-center py-5 " >
               <h5 className=" bg-pink-300 inline rounded p-1">What We Offer</h5> 
               <h2 className="pt-5">Our Featured Solutions</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
           
     

        <div className="service container px-7 grid grid-cols-2  md:grid-cols-4 gap-6 py-5">
            <div className="box  p-3">
                <span className="text-4xl bg-green-100 shadow-sm rounded inline-block text-green-500   ">
                    <AiOutlineFundProjectionScreen/>
                </span>
                <h3>Programmatic Advertising</h3>
                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore.</p>
                <button className=""> <AiOutlinePlusCircle className="inline"/> Learn More </button>
            </div>
            <div className="box  p-3">
                <span className="text-4xl bg-green-100 shadow-sm rounded inline-block text-green-500   ">
                    <AiOutlineFundProjectionScreen/>
                </span>
                <h3>Programmatic Advertising</h3>
                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore.</p>
                <button className=""> <AiOutlinePlusCircle className="inline"/> Learn More </button>
            </div>
            <div className="box  p-3">
                <span className="text-4xl bg-green-100 shadow-sm rounded inline-block text-green-500   ">
                    <AiOutlineFundProjectionScreen/>
                </span>
                <h3>Programmatic Advertising</h3>
                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore.</p>
                <button className=""> <AiOutlinePlusCircle className="inline"/> Learn More </button>
            </div>
            <div className="box  p-3">
                <span className="text-4xl bg-green-100 shadow-sm rounded inline-block text-green-500   ">
                    <AiOutlineFundProjectionScreen/>
                </span>
                <h3>Programmatic Advertising</h3>
                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore.</p>
                <button className=""> <AiOutlinePlusCircle className="inline"/> Learn More </button>
            </div>
        </div>

        



           <div  className="hidden md:block  absolute top-0 ">
           <Image
                width={200}
                height={200}
                objectFit="cover"
                src='/images/agency-shape1.png'
                alt=""
            />
            </div> 
        </section>
    );
};

export default Features;