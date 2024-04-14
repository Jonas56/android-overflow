import { Suspense } from "react";
import Header from "../ui/home/Header";
import QuestionsList from "@/app/ui/home/QuestionsList";
import QuestionsListSkelton from "../ui/home/QuestionsListSkelton";

export default function Page() {
  return (
    <main className="container mx-auto py-10">
      <Header
        title="Android StackOverflow Questions"
        description="Checkout these 10 latest Android questions on StackOverflow."
      />
      <Suspense fallback={<QuestionsListSkelton />}>
        <QuestionsList trending={false} />
      </Suspense>
    </main>
  );
}
