import React from 'react';

const Counter = () => {
    return (
        <section className='container mx-auto px-4'>
          <div className='text-center py-5'>
            <h3 className='text-3xl'>We Completed 1500+ Projects Yearly Successfully & Counting</h3>
            <p className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className=" text-center grid grid-cols-2 md:grid-cols-4">
            <div>
                <h1 className='text-green-600'>180K</h1>
                <p>Downloaded</p>
            </div>
            <div>
                <h1 className='text-green-600'>20K</h1>
                <p>Feedback</p>
            </div>
            <div>
                <h1 className='text-green-600'>500+</h1>
                <p>Workers</p>
            </div>
            <div>
                <h1 className='text-green-600'>70+</h1>
                <p>Contributors</p>
            </div>
          </div>
        </section>
    );
};

export default Counter;