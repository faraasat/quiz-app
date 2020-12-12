import { fetchObj } from "./../types/quiz-types";
import { fetchType } from "../types/quiz-types";

export const GetQuizData = async (data: fetchType) => {
  try {
    let incomingData;
    if (
      data?.category === 0 &&
      data?.difficulty === "any" &&
      data?.type === "any"
    ) {
      incomingData = await fetch(
        `https://opentdb.com/api.php?amount=${data?.amount}`
      );
    } else if (data?.category === 0 && data?.difficulty === "any") {
      incomingData = await fetch(
        `https://opentdb.com/api.php?amount=${data?.amount}&type=${data?.type}`
      );
    } else if (data?.category === 0 && data?.type === "any") {
      incomingData = await fetch(
        `https://opentdb.com/api.php?amount=${data?.amount}&difficulty=${data?.difficulty}`
      );
    } else if (data?.difficulty === "any" && data?.type === "any") {
      incomingData = await fetch(
        `https://opentdb.com/api.php?amount=${data?.amount}&category=${data?.category}`
      );
    } else if (data?.category === 0) {
      incomingData = await fetch(
        `https://opentdb.com/api.php?amount=${data?.amount}&difficulty=${data?.difficulty}&type=${data?.type}`
      );
    } else if (data?.difficulty === "any") {
      incomingData = await fetch(
        `https://opentdb.com/api.php?amount=${data?.amount}&category=${data?.category}&type=${data?.type}`
      );
    } else if (data?.type === "any") {
      incomingData = await fetch(
        `https://opentdb.com/api.php?amount=${data?.amount}&category=${data?.category}&difficulty=${data?.difficulty}`
      );
    } else {
      incomingData = await fetch(
        `https://opentdb.com/api.php?amount=${data?.amount}&category=${data?.category}&difficulty=${data?.difficulty}&type=${data?.type}`
      );
    }
    let result: fetchObj = await incomingData?.json();
    return result;
  } catch (error) {
    throw error;
  }
};
