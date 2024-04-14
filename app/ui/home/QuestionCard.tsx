import { Question } from "@/app/lib/definitions";
import Link from "next/link";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

export default function QuestionCard({ question }: { question: Question }) {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between">
          <div>
            <Link href={`/thread/${question.id}`} className="text-gray-500">
              <h1 className="text-md font-extrabold text-gray-600 max-w-3xl hover:text-green-500 hover:cursor-pointer md:text-2xl">
                {question.title}
              </h1>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              {question.votes >= 0 ? (
                <div className="flex items-center mr-8">
                  <IoChevronUpSharp className="h-5 w-5 mr-1 text-green-500" />
                  <span>{question.votes}</span>{" "}
                  <span className="hidden sm:inline">votes</span>
                </div>
              ) : (
                <div className="flex items-center mr-8">
                  <IoChevronDownSharp className="h-5 w-5 mr-1 text-red-500" />
                  <span>{question.votes} </span>{" "}
                  <span className="hidden sm:hidden">votes</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex items-center">
            <img
              src={question.userAvatarLink}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4">
              <span>Asked By:</span>{" "}
              <a
                className="text-gray-900 font-bold"
                href={question.userProfileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {question.username}
              </a>
              <p className="text-gray-500 pt-2">{question.creation_date}</p>
            </div>
          </div>
          <div className="items-center hidden sm:flex">
            {question.tags.map((tag: string) => (
              <a
                key={tag}
                href={`https://stackoverflow.com/questions/tagged/${tag}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-100 text-green-500 px-2 py-1 rounded-full text-sm mr-2"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
