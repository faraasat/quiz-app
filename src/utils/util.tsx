import {
  fetchObj,
  fetchReturnType,
  parsedReturnType,
} from "../types/quiz-types";

const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const parseQuizData = (data: fetchObj | undefined) => {
  const results: fetchReturnType[] | undefined = data?.results;
  const parsedData: parsedReturnType[] | undefined = results?.map<parsedReturnType>(
    (result) => {
      const myOptions = shuffleArray(
        result.incorrect_answers.concat(result?.correct_answer)
      );
      return {
        correct_answer: result?.correct_answer,
        options: myOptions,
        question: result?.question,
      };
    }
  );
  return parsedData;
};
