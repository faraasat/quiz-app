export type fetchType = {
  amount: number;
  category: number;
  difficulty: string;
  type: string;
};

export type fetchObj = {
  response_code: number;
  results: fetchReturnType[];
};

export type fetchReturnType = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type parsedReturnType = {
  correct_answer: string;
  options: string[];
  question: string;
};

export interface IQuizCard {
  quizData: parsedReturnType[] | undefined;
  quizLoading: boolean;
  cardChange: boolean;
  setCardChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAnswerCard {
  quizData: parsedReturnType[] | undefined;
  quizLoading: boolean;
  setCardChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IInitialCard {
  setCardChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IQuizData {
  quizData: parsedReturnType[] | undefined;
  setCardChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ChildType {
  children: React.ReactChild | React.ReactChildren;
}

export interface Loader {
  showLoader: () => void | undefined;
  hideLoader: () => void | undefined;
}
