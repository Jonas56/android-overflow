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
  answer?: Answer;
}

export interface Answer {
  id: number;
  title: string;
  username: string;
  creation_date: number;
  description: string;
  userAvatarLink?: string;
  votes: number;
}
