import { Suspense } from "react";
import Header from "@/app/ui/home/HomeHeader";
import QuestionsList from "@/app/ui/home/QuestionsList";
import QuestionsListSkelton from "@/app/ui/home/QuestionsListSkelton";

export default async function Page() {
  return (
    <main className="container mx-auto py-10">
      <Header
        title="Android StackOverflow Questions"
        description="Checkout these 10 most voted Android questions on StackOverflow over the past week."
      />
      <Suspense fallback={<QuestionsListSkelton />}>
        <QuestionsList trending={true} />
      </Suspense>
    </main>
  );
}
