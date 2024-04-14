import Link from "next/link";
import Search from "./Search";
import { Suspense } from "react";

export function Header({
  title,
  description,
  search,
}: {
  title: string;
  description: string;
  search: boolean;
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
        {search && (
          <Suspense fallback={<div>Loading...</div>}>
            <Search />
          </Suspense>
        )}
      </div>
    </div>
  );
}
