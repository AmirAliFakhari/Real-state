function Slider() {
  return (
    <div className="relative">
      <img
        src="src\assets\imgs\slidephoto.svg"
        alt="Background"
        className="w-full h-auto"
      />

      <div className="absolute hidden sm:flex inset-0 flex flex-col  text-white justify-center items-center">
        <p>سقفینو؛ سقفی برای همه</p>
        <span>
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
        </span>
      </div>
      <div className="absolute inset-0 flex  justify-center items-center sm:items-end mb-4 md:mb-28">
        <form className="max-w-md mx-auto ">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            کجا؟
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img
                className=""
                src="src\assets\icons\search-normal.svg"
                alt="ds"
              />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-72 sm:w-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="کجا میخوای زندگی کنی؟"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              جست و جو
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Slider;
