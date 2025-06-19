import MultiRangeSlider from "./MultiRangeSilder";
const CampingsSearchBar = () => {
  return (
    <div className="px-2">
      <form action="">
        <div className="flex flex-col">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search for campings..."
            // defaultValue={state.search}
            className="mb-5 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder-gray-400"
          />
          <MultiRangeSlider min="0" max="150" />
        </div>
        <button
          type="submit"
          className="mt-5 w-full py-3 bg-slate-600 hover:bg-slate-300 hover:text-black hover:cursor-pointer text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default CampingsSearchBar;
