export default function Question({ question }: any) {
  return (
    <li key={question.id} className="flex justify-between gap-x-6 py-5 mb-10">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold text-gray-600 md:text-2xl hover:text-gray-800">
            {question.title}
          </p>
          <p className="mt-5 truncate text-md leading-5 text-gray-400 ">
            #{question.tags.join(", #")}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-xs text-gray-700 md:text-xl">{question.username}</p>
        <p className="mt-5 text-xs leading-5 text-gray-400 md:text-xl">
          {question.votes == 1
            ? `${question.votes} vote`
            : `${question.votes} votes`}
        </p>
      </div>
    </li>
  );
}
