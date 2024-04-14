export interface Question {
  id: number;
  title: string;
  username: string;
  creation_date: number;
  description: string;
  votes: number;
  tags: string[];
  has_accepted_answer: boolean;
  userAvatarLink?: string;
  userProfileLink?: string;
  questionLink?: string;
}

export interface Answer {
  id: number;
  title: string;
  username: string;
  creation_date: number;
  description: string;
  userAvatarLink?: string;
  userProfileLink?: string;
  votes: number;
}

export interface Threadtype {
  question: Question;
  answer?: Answer;
}
