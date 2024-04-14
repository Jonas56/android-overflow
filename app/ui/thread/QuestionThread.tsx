import { Question } from "@/app/lib/definitions";
import MarkdownRenderer from "@/app/ui/common/MarkdownRenderer";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";

export async function QuestionThread({ question }: { question: Question }) {
  return (
    <>
      <div className="text-3xl font-semibold mb-5">
        {question.title}
        <a
          href={question.questionLink}
          className="mb-5 hover:text-green-400 hover:underline-offset-2 transition duration-200 ease-in-out"
        >
          {` `}
          <FaExternalLinkAlt className="h-6 w-6 inline-block" />
        </a>
      </div>
      <hr className="my-6" />
      <div className="mb-4 text-lg overflow-x-auto">
        <MarkdownRenderer markdown={question.description} />
      </div>
      <div className="flex items-center text-gray-500 text-sm mb-4">
        {question.votes > 0 ? (
          <div className="flex items-center mr-8">
            <IoChevronUpSharp className="h-5 w-5 mr-1 text-green-500" />
            <span>{question.votes}</span>
          </div>
        ) : (
          <div className="flex items-center mr-8">
            <IoChevronDownSharp className="h-5 w-5 mr-1 text-red-500" />
            <span>{question.votes}</span>
          </div>
        )}

        <div className="flex items-center mr-8">
          <CiCalendar className="h-5 w-5 mr-1 text-gray-700" />
          <span>{question.creation_date}</span>{" "}
        </div>
        <a
          className="flex items-center"
          href={question.userProfileLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={question.userAvatarLink}
            alt="User Avatar"
          />
          <span>{question.username}</span>
        </a>
      </div>
      <div className="flex flex-wrap mb-6">
        {question.tags.map((tag) => (
          <a
            key={tag}
            className="bg-green-100 text-green-600 px-3 py-1 rounded-md text-xs mr-2 mb-2"
            href={`https://stackoverflow.com/questions/tagged/${tag}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            #{tag}
          </a>
        ))}
      </div>
    </>
  );
}
