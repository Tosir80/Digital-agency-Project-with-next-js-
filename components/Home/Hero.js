import Image from "next/image";

const Hero = () => {
  return (
    <section className=" md:container mx-auto py-5 px-4  md:mt-[100px]">
      <div className="hero md:flex justify-around items-center">
        <div className="left py-5 md:py-0 ">
          <h3 className="py-2">WE ARE CREATIVE</h3>
          <h1>Digital Agency</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Started
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="right">
          <Image
            width={500}
            height={500}
            objectFit="cover"
            src="/images/agency-banner-img.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
