import Link from "next/link";
import Search from "./Search";

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
        <Search />
      </div>
    </div>
  );
}
