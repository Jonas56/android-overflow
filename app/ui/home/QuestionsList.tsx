import QuestionCard from "./QuestionCard";
import {
  fetchTopAndroidQuestions,
  fetch10LatestAndroidQuestions,
} from "@/app/lib/api";

export default async function QuestionsList({
  trending,
}: {
  trending: boolean;
}) {
  const questions = trending
    ? await fetchTopAndroidQuestions()
    : await fetch10LatestAndroidQuestions();
  return questions ? (
    <ul role="list" className="w-full divide-y divide-gray-100">
      {questions.map((question: any) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </ul>
  ) : (
    <p className="text-center text-lg">Error When Fetching questions...</p>
  );
}
