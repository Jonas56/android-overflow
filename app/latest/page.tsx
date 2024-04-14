import { Suspense } from "react";
import Header from "@/app/ui/home/HomeHeader";
import QuestionsList from "@/app/ui/home/QuestionsList";
import QuestionsListSkelton from "@/app/ui/home/QuestionsListSkelton";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <main className="container mx-auto py-10">
      <Header
        title="Android StackOverflow Questions"
        description="Checkout these 10 latest Android questions on StackOverflow."
      />
      <Suspense key={query} fallback={<QuestionsListSkelton />}>
        <QuestionsList trending={false} query={query} />
      </Suspense>
    </main>
  );
}
