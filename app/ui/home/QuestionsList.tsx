import { Question } from "@/app/lib/definitions";
import QuestionCard from "./QuestionCard";
import {
  fetchTopAndroidQuestions,
  fetch10LatestAndroidQuestions,
  fetchQuestionsByKeyword,
} from "@/app/lib/api";
import Notification from "../common/ErrorModal";

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
  if (questions) {
    if (questions.length === 0) {
      return (
        <Notification
          message="No questions found!"
          cause="Please try again with another query"
        />
      );
    } else
      return (
        <ul role="list" className="w-full divide-y divide-gray-100">
          {questions.map((question: any) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </ul>
      );
  } else {
    return (
      <Notification
        message="Unable to fetch questions"
        cause="Please check you internet connection and try again!"
      />
    );
  }
}
