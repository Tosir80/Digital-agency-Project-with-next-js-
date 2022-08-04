import React from "react";

const Contact = () => {
  return (
    <section  className="  container mx-auto py-5">
      <div className="text-center py-5  md:flex items-center justify-center space-x-5 ">
        <div>
        <h4 className="text-2xl">Have any question about us?</h4>
        <p>Don't hesitate to contact us</p>
        </div>
        <button
          type="button"
          className= " text-gray-900 bg-orange-300 hover:bg-gray-100 border border-green-200 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:border-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
        >
         Contact us
          
        </button>

        
      </div>
   

    </section>
  );
};

export default Contact;
