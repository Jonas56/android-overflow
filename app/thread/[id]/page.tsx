import { Suspense } from "react";
import { Metadata } from "next";
import { Header, QuestionThreadSkelton, Thread } from "@/app/ui/thread";

export const metadata: Metadata = {
  title: "Thread",
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-8">
      <Header />
      <Suspense fallback={<QuestionThreadSkelton />}>
        <Thread id={+params.id} />
      </Suspense>
    </div>
  );
}
