import Image from "next/image";

const FeatureDown = () => {
  return (
    <section className=" py-5  md:mt-[100px]">
      <div className="FeatureDown md:grid grid-cols-2 gap-2 justify-around items-center">
        <div>
          <Image
           width="100%" height="100%" layout="responsive" objectFit="contain"
            src="/images/agency-about-img.jpg"
            alt=""
          />
        </div>
        <div className="left  px-5">
          <h5 className=" bg-pink-200 px-3 inline rounded p-1">
            What We Offer
          </h5>
          <h3 className=" py-2">Engaging New Audiences Through Smart Approach</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam
            quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
            leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
            magna. Sed consequat, leo eget bibendum sodales, augue velit cursus
            nunc.Donec vitae sapien ut libero venenatis faucibus tempus.
          </p>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Discover More
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
      </div>
    </section>
  );
};

export default FeatureDown;
