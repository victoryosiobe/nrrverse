import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
const Search = ({ placeholder }) => (
  <div className="flex justify-between">
    <div className="relative flex-grow">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
      </div>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
    <div className="inline-flex flex-shrink-0 items-center px-2 ml-2  border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <AdjustmentsHorizontalIcon className="h-6 w-6 text-gray-500" />
    </div>
  </div>
);
export default Search;
