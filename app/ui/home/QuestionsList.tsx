import { Question } from "@/app/lib/definitions";
import QuestionCard from "./QuestionCard";
import {
  fetchTopAndroidQuestions,
  fetch10LatestAndroidQuestions,
  fetchQuestionsByKeyword,
} from "@/app/lib/api";
import Example from "../common/ErrorModal";

export default async function QuestionsList({
  trending,
  query,
}: {
  trending: boolean;
  query?: string;
}) {
  let questions: Question[] | undefined;
  if (query) questions = await fetchQuestionsByKeyword(query);
  else {
    questions = trending
      ? await fetchTopAndroidQuestions()
      : await fetch10LatestAndroidQuestions();
  }
  return questions ? (
    <ul role="list" className="w-full divide-y divide-gray-100">
      {questions.map((question: any) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </ul>
  ) : (
    <Example />
  );
}
