import Brand from "./Brand";
import BtnImp from "./BtnImp";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { fadeDurate, supress } from "../../public/variables";
const supressIds = supress.elements;
const NavBar = () => {
  function inneMenuT(slow) {
    const nvI = document.getElementById("navbar-inner");
    nvI.classList.toggle("animate-fadeOut");
    if (!slow) nvI.classList.toggle("hidden");
    else setTimeout(() => nvI.classList.toggle("hidden"), fadeDurate + 10);

    if (supressIds) supressIds.map((v) => supressFn(v));

    function supressFn(id) {
      document.getElementById(id).classList.toggle("-z-10");
    } //navbar needs to be at top always, but we dont need that sometimes, and we have issues with z-index parents
    //where if a parent having z-index has a child with any z-index will fail to be at top, because it is limited by it's parent's z-index
    //so it may be higher than others in same parent, but outside the parent, if an elment has a higher z-index than the parent, then it becomes over the parent and all it's children
    //The suggested, standard way is to move the child to root so it can supass others, but i don't want that as I want the element to remain a child in such parent
    //hence, i use javascript to drop the z-index of other parent when i need to, say on a click on the menu on navbar so it can create overlay over all content.
    //In this case the navbar is coupled at App level, not page level, so i can't send in the element so i harness the id, patch way would be just put the id direct and check if it exists first
    //but we may scale, change id, anything, so i decided to set the id at variables file that the Element and Navbar would get the id from, so i can modify it from there as needed instead of screening through files.
  }
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed start-0 top-0 w-full z-[1]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Brand />
        <div className="md:order-3 md:block">
          <div className="hidden md:block">
            <BtnImp label="Elements" href="/elements" />
          </div>
          <button
            onClick={() => inneMenuT(false)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none hover:ring-2 hover:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:ring-gray-400 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full md:flex md:w-max md:mx-auto md:justify-center md:items-center md:order-2 animate-fadeOut md:animate-none"
          id="navbar-inner"
        >
          <div className="w-full h-lvh top-0 left-0 absolute bg-black bg-opacity-75 font-bold backdrop-blur-sm md:block md:h-max md:w-max md:bg-transparent md:bg-opacity-100 md:backdrop-blur-none md:top-auto md:left-auto md:flex">
            <XMarkIcon
              className="absolute h-8 w-8 text-white m-4 mt-6 right-0 md:hidden"
              onClick={() => inneMenuT(true)}
            />
            <ul className="flex flex-col p-4 m-4 mt-16 md:p-0 md:m-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/info#about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/info#services"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
            </ul>

            <div className="pt-3 md:hidden mx-[25%]">
              <BtnImp label="Elements" href="/elements" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
