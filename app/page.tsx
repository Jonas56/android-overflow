import { Suspense } from "react";
import Header from "@/app/ui/home/HomeHeader";
import QuestionsList from "@/app/ui/home/QuestionsList";
import QuestionsListSkelton from "@/app/ui/home/QuestionsListSkelton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Most Voted Questions",
};

export default async function Page() {
  return (
    <main className="container mx-auto py-10">
      <Header
        title="Android StackOverflow Questions"
        description="Checkout these 10 most voted Android questions on StackOverflow over the past week."
        search={false}
      />
      <Suspense fallback={<QuestionsListSkelton />}>
        <QuestionsList trending={true} />
      </Suspense>
    </main>
  );
}
