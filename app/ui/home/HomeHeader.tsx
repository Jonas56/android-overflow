import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-16">
      <div className="flex flex-col justify-between md:flex-row">
        <div>
          <h1 className="lg:text-4xl text-2xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h1>
          <p className="mt-4 mx-auto text-base text-gray-500">{description}</p>
        </div>
        <div className="">
          <Link href="/">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4">
              Most Votes
            </button>
          </Link>
          <Link href="/latest">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Latest
            </button>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex items-center max-w-lg mx-auto mt-10">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <CiSearch className="w-4 h-4 text-gray-500" />
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3.5"
              placeholder="Search by Keywords, Tags, User..."
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}
