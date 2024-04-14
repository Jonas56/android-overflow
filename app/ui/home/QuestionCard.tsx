export default function QuestionCard({ question }: any) {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-600 max-w-3xl hover:text-green-500 hover:cursor-pointer">
              {question.title}
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-600">
                {question.votes}
              </span>
              <span className="text-gray-500 ml-2">votes</span>
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
                href="https://stackoverflow.com/users/23139089/jean-mako"
                target="_blank"
                rel="noopener noreferrer"
              >
                {question.username}
              </a>
              <p className="text-gray-500 pt-2">
                {new Date(question.creation_date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center">
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
