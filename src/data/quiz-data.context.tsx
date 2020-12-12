import { createContext, useReducer } from "react";
import QuizDataReducer from "./quiz-data.reducer";
import { ChildType, fetchType } from "../types/quiz-types";

const initialValue: any = {
  req_quiz: {
    amount: 1,
    category: 0,
    difficulty: "any",
    type: "any",
  },
};

export const QuizDataContext = createContext(initialValue);

export const QuizDataContextProvider: React.FC<ChildType> = ({ children }) => {
  const [state, dispatch] = useReducer(QuizDataReducer, initialValue);

  function requiredData(dataObj: fetchType) {
    dispatch({
      type: "REQUIRED_QUIZ",
      payload: {
        amount: dataObj?.amount,
        category: dataObj?.category,
        difficulty: dataObj?.difficulty,
        type: dataObj?.type,
      },
    });
  }

  return (
    <QuizDataContext.Provider
      value={{
        combined_data: state,
        requiredData,
      }}
    >
      {children}
    </QuizDataContext.Provider>
  );
};
