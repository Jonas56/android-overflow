import Question from "./Question";

export default function Questions({ questions }: any) {
  return (
    <ul role="list" className="w-full divide-y divide-gray-100">
      {questions.map((question: any) => (
        <Question key={question.id} question={question} />
      ))}
    </ul>
  );
}
