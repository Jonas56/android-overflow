import axios from "axios";

export async function getQuestionAndAnswersById(questionId: number) {
  try {
    const questionResponse = await axios.get(
      `https://api.stackexchange.com/2.3/questions/${questionId}`,
      {
        params: {
          site: "stackoverflow",
          filter: "withbody",
        },
      }
    );

    const question = questionResponse.data.items[0];

    const answersResponse = await axios.get(
      `https://api.stackexchange.com/2.3/questions/${questionId}/answers`,
      {
        params: {
          site: "stackoverflow",
          sort: "votes",
          order: "desc",
          filter: "withbody",
        },
      }
    );

    const answers = answersResponse.data.items;
    return {
      question: {
        title: question.title,
        body: question.body,
        username: question.owner.display_name,
        votes: question.score,
        tags: question.tags,
        acceptedAnswerId: question.accepted_answer_id,
        creation_date: question.creation_date,
      },
      answers: answers.map((answer: any) => ({
        title: answer.title,
        body: answer.body,
        username: answer.owner.display_name,
        votes: answer.score,
        accepted: answer.is_accepted,
      })),
    };
  } catch (error) {
    console.error("Error fetching question or answers:", error);
    throw error;
  }
}

export async function getTopAndroidQuestions() {
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

    return {
      questions: questions.map((question: any) => ({
        title: question.title,
        username: question.owner.display_name,
        votes: question.score,
        tags: question.tags,
        creation_date: question.creation_date,
      })),
    };
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
}

export async function get10LatestAndroidQuestions() {
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

    return {
      questions: questions.map((question: any) => ({
        title: question.title,
        username: question.owner.display_name,
        votes: question.score,
        tags: question.tags,
        creation_date: question.creation_date,
      })),
    };
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
}

export async function getQuestionsByKeyword(query: string) {
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
