import { Suspense } from "react";
import { Header, QuestionsList, QuestionsListSkelton } from "@/app/ui/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest Asked Questions",
};

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
        search={true}
      />
      <Suspense key={query} fallback={<QuestionsListSkelton />}>
        <QuestionsList trending={false} query={query} />
      </Suspense>
    </main>
  );
}
