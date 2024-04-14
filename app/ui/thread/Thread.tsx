import { AnswerThread, QuestionThread } from "./";
import { fetchThreadById } from "@/app/lib/api";
import { notFound } from "next/navigation";

export async function Thread({ id }: { id: number }) {
  const result = await fetchThreadById(id);
  if (!result) {
    notFound();
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
