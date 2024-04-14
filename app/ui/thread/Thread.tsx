import { Threadtype } from "@/app/lib/definitions";
import AnswerThread from "./AnswerThread";
import QuestionThread from "./QuestionThread";
import Header from "./Header";

export default async function Thread({ thread }: { thread: Threadtype }) {
  return (
    <>
      <div className="container mx-auto py-8">
        <Header />
        <div className="bg-white rounded-lg shadow-md p-6">
          <QuestionThread question={thread.question} />
          <hr className="my-6" />
          {thread.answer === undefined ? (
            <div> No accepted answer found check out other answers here </div>
          ) : (
            <AnswerThread answer={thread.answer} />
          )}
        </div>
      </div>
    </>
  );
}
