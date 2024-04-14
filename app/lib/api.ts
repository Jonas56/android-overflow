import { unstable_noStore as noStore } from "next/cache";
import axios, { AxiosResponse } from "axios"; // I could have used fetch API as well
import { Answer, Question, Threadtype } from "./definitions";
import { format } from "date-fns";

export async function fetchThreadById(
  id: number
): Promise<Threadtype | undefined> {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `https://api.stackexchange.com/2.3/questions/${id}`,
      {
        params: {
          tagged: "android",
          site: "stackoverflow",
          sort: "activity",
          order: "desc",
        },
      }
    );

    if (response.data.items.length === 0) {
      return undefined;
    }

    const questionData = response.data.items[0];
    const question: Question = {
      id: questionData.question_id,
      title: questionData.title,
      username: questionData.owner.display_name,
      creation_date: format(
        new Date(questionData.creation_date * 1000),
        "MMM d 'at' h:mm a"
      ),
      description: questionData.body,
      votes: questionData.score,
      tags: questionData.tags,
      has_accepted_answer: !!questionData.accepted_answer_id,
      userAvatarLink: questionData.owner.profile_image,
      userProfileLink: questionData.owner.link,
      questionLink: questionData.link,
    };

    let answer: Answer | undefined;

    if (questionData.accepted_answer_id !== null) {
      answer = await fetchAnswerById(questionData.accepted_answer_id);
    } else {
      answer = await fetchMostVotedAnswer(id);
    }

    return { question, answer };
  } catch (error) {
    console.error("Error fetching thread:", error);
    return undefined;
  }
}

export async function fetchTopAndroidQuestions(): Promise<
  Question[] | undefined
> {
  noStore(); // This is a Next.js specific function to prevent caching I could have used cache-control headers as well
  try {
    const today = new Date();
    const pastDate = new Date(today.setDate(today.getDate() - 7));
    const fromdate = Math.floor(pastDate.getTime() / 1000);

    const response = await axios.get(
      "https://api.stackexchange.com/2.3/questions",
      {
        params: {
          fromdate: fromdate,
          tagged: "android",
          site: "stackoverflow",
          sort: "votes",
          order: "desc",
          pagesize: 10,
        },
      }
    );

    const questions = response.data.items;

    return questions.map((question: any) => ({
      id: question.question_id,
      title: question.title,
      username: question.owner.display_name,
      votes: question.score,
      tags: question.tags,
      creation_date: format(
        new Date(question.creation_date * 1000),
        "MMM d 'at' h:mm a"
      ),
      userAvatarLink: question.owner.profile_image,
      userProfileLink: question.owner.link,
      has_accepted_answer: question.is_answered,
      questionLink: question.link,
    }));
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
}

export async function fetch10LatestAndroidQuestions(): Promise<
  Question[] | undefined
> {
  noStore(); // This is a Next.js specific function to prevent caching I could have used cache-control headers as well

  try {
    const response = await axios.get(
      "https://api.stackexchange.com/2.3/questions",
      {
        params: {
          tagged: "android",
          site: "stackoverflow",
          sort: "creation",
          order: "desc",
          pagesize: 10,
        },
      }
    );

    const questions = response.data.items;

    return questions.map((question: any) => ({
      id: question.question_id,
      title: question.title,
      username: question.owner.display_name,
      votes: question.score,
      tags: question.tags,
      creation_date: format(
        new Date(question.creation_date * 1000),
        "MMM d 'at' h:mm a"
      ),
      userAvatarLink: question.owner.profile_image,
      userProfileLink: question.owner.link,
      has_accepted_answer: question.is_answered,
      questionLink: question.link,
    }));
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
}

export async function fetchQuestionsByKeyword(query: string) {
  noStore(); // This is a Next.js specific function to prevent caching I could have used cache-control headers as well
  try {
    const response = await axios.get(
      "https://api.stackexchange.com/2.3/search",
      {
        params: {
          intitle: query,
          site: "stackoverflow",
          sort: "relevance",
          order: "desc",
          pagesize: 10,
        },
      }
    );

    const questions = response.data.items;

    return questions;
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
}

async function fetchAnswerById(answerId: number): Promise<Answer | undefined> {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `https://api.stackexchange.com/2.3/answers/${answerId}`,
      {
        params: {
          order: "desc",
          sort: "activity",
          site: "stackoverflow",
          filter: "!-*f(6t*ZfUuq",
        },
      }
    );

    if (response.data.items.length === 0) {
      return undefined;
    }

    const answerData = response.data.items[0];
    const answer: Answer = {
      id: answerData.answer_id,
      username: answerData.owner.display_name,
      creation_date: format(
        new Date(answerData.creation_date * 1000),
        "MMM d 'at' h:mm a"
      ),
      description: answerData.body,
      userAvatarLink: answerData.owner.profile_image,
      userProfileLink: answerData.owner.link,
      votes: answerData.score,
    };

    return answer;
  } catch (error) {
    console.error("Error fetching answer:", error);
    return undefined;
  }
}

async function fetchMostVotedAnswer(
  questionId: number
): Promise<Answer | undefined> {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `https://api.stackexchange.com/2.3/questions/${questionId}/answers`,
      {
        params: {
          order: "desc",
          sort: "votes",
          site: "stackoverflow",
          filter: "!-*f(6t*ZfUuq",
        },
      }
    );

    if (response.data.items.length === 0) {
      return undefined;
    }

    const answerData = response.data.items[0];
    const answer: Answer = {
      id: answerData.answer_id,
      username: answerData.owner.display_name,
      creation_date: format(
        new Date(answerData.creation_date * 1000),
        "MMM d 'at' h:mm a"
      ),
      description: answerData.body,
      userAvatarLink: answerData.owner.profile_image,
      userProfileLink: answerData.owner.link,
      votes: answerData.score,
    };

    return answer;
  } catch (error) {
    console.error("Error fetching most voted answer:", error);
    return undefined;
  }
}
