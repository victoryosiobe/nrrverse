import {
  MagnifyingGlassIcon,
  ArrowsPointingOutIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

const Hero = () => (
  <section className="min-h-svh flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 abc">
    <div className="py-5">
      <div className="text-center max-w-10xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-extrabold uppercase text-white mb-8">
          Discover & Customize Excellent Templates
        </h1>

        <p className="text-lg sm:text-xl text-white mb-8">
          Browse through amazing templates contributed by open source, to find
          the most suitable for your needs, and of course, for free.
        </p>
        {/*  <div className="flex items-center justify-center m-8">
          <input
            type="text"
            className="py-3 px-4 block w-80 border-2 border-solid border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            <MagnifyingGlassIcon className="h-5 w-5 mx-2" />
          </button>
        </div>
        */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex flex-col items-center bg-white text-white bg-opacity-10 p-4 rounded-lg backdrop-blur">
            <AdjustmentsHorizontalIcon className="h-10 w-10 m-3" />
            <h3 className="text-lg font-bold m-3 mb-2">Easy Customization</h3>
            <p className="text-sm m-3 mt-0">
              All templates you find, are very easy to customize to fit your
              needs.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white text-white bg-opacity-20 p-4 rounded-lg backdrop-blur">
            <ArrowsPointingOutIcon className="h-10 w-10 m-3 sm:m-4" />
            <h3 className="text-lg font-bold m-3 mb-2 sm:m-4 sm:mb-2">
              Responsive Design
            </h3>
            <p className="text-sm m-3 mt-0 sm:m-4 sm:mt-0">
              Templates here, are fully responsive and look great on most
              devices.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white text-white bg-opacity-10 p-4 rounded-lg backdrop-blur">
            <SparklesIcon className="h-10 w-10 m-3" />
            <h3 className="text-lg font-bold m-3 mb-2">High Quality</h3>
            <p className="text-sm m-3 mt-0">
              Templates are designed with the latest trends and standards in
              mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
); /*
const Hero = () => (
  <div className="relative bg-gradient-to-r from-blue-400 to-blue-600 py-2 flex justify-center items-center min-h-screen">
    /* <div className="absolute inset-0 bg-blue-500 opacity-25"></div>
    <div className="relative z-10 text-center max-w-2xl mx-auto">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-8">
        Find Your Perfect Template
      </h1>
      <p className="text-lg sm:text-xl text-white mb-8">
        Search and discover the best templates to build your amazing website.
      </p>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search templates..."
          className="px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
        />
        <button className="px-4 py-2 bg-blue-700 text-white rounded-r-lg hover:bg-blue-800">
          Search
        </button>
      </div>
    </div>
  </div>
);*/

export default Hero;
