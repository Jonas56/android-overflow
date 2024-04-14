import { Question } from "@/app/lib/definitions";
import QuestionCard from "./QuestionCard";

export default function QuestionsList({
  questions,
}: {
  questions: Question[];
}) {
  return (
    <ul role="list" className="w-full divide-y divide-gray-100">
      {questions.map((question: any) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </ul>
  );
}
