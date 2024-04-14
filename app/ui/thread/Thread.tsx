import { Threadtype } from "@/app/lib/definitions";
import AnswerThread from "./AnswerThread";
import QuestionThread from "./QuestionThread";
import { fetchThreadById } from "@/app/lib/api";

export default async function Thread({ id }: { id: number }) {
  const result = await fetchThreadById(id);
  if (result === undefined) {
    return <div> Error fetching thread </div>;
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <>
        <QuestionThread question={result.question} />
        <hr className="my-6" />
        {result.answer === undefined ? (
          <div> No accepted answer found check out other answers here </div>
        ) : (
          <AnswerThread answer={result.answer} />
        )}
      </>
    </div>
  );
}
