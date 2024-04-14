import { Answer } from "@/app/lib/definitions";
import MarkdownRenderer from "../common/MarkdownRenderer";
import { IoChevronUpSharp, IoChevronDownSharp } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

export default function AnswerThread({ answer }: { answer: Answer }) {
  return (
    <>
      <div className="bg-green-100 rounded-lg p-4 mb-4">
        <h3 className="text-xl font-semibold mb-2">Accepted Answer</h3>
        <div className="bg-white p-10">
          <MarkdownRenderer markdown={answer.description} />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <a
          className="flex items-center"
          href={answer.userProfileLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={answer.userAvatarLink}
            alt="User Avatar"
          />
          <span>{answer.username}</span>
        </a>
        <div className="flex items-center gap-2">
          <>
            <CiCalendar className="h-5 w-5 mr-1 text-gray-700" />
            <span className="text-gray-500">
              {new Date(answer.creation_date).toLocaleDateString()}
            </span>
          </>

          <>
            {answer.votes > 0 ? (
              <div className="flex items-center mr-8">
                <IoChevronUpSharp className="h-5 w-5 mr-1 text-green-500" />
                <span>{answer.votes}</span>
              </div>
            ) : (
              <div className="flex items-center mr-8">
                <IoChevronDownSharp className="h-5 w-5 mr-1 text-red-500" />
                <span>{answer.votes}</span>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
}
