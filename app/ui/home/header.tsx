export default function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-24">
      <div className="flex flex-col justify-between md:flex-row">
        <div>
          <h1 className="lg:text-4xl text-2xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h1>
          <p className="mt-4 mx-auto text-base text-gray-500">{description}</p>
        </div>
        <div className="">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4">
            Most Votes
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Latest
          </button>
        </div>
      </div>
      <div>
        <form className="flex items-center max-w-lg mx-auto">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}
