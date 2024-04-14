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
          <div> No answer found for this question yet.</div>
        ) : (
          <AnswerThread answer={result.answer} />
        )}
      </>
    </div>
  );
}
