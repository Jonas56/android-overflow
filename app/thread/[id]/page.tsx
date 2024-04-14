import Header from "@/app/ui/thread/Header";
import QuestionThreadSkelton from "@/app/ui/thread/QuestionThreadSkelton";
import Thread from "@/app/ui/thread/Thread";
import { Metadata } from "next";
import { Suspense } from "react";

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
