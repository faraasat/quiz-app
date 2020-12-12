import { useContext, useEffect, useState } from "react";
import { parsedReturnType } from "./types/quiz-types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import QuizCard from "./Components/QuizCard/quiz-card.component";
import { parseQuizData } from "./utils/util";
import { QuizDataContext } from "./data/quiz-data.context";
import { GetQuizData } from "./services/quiz-data";

function App() {
  const [quizData, setQuizData] = useState<parsedReturnType[]>();
  const [quizLoading, setQuizLoading] = useState<boolean>(false);
  const [cardChange, setCardChange] = useState<boolean>(false);
  const { combined_data } = useContext(QuizDataContext);

  useEffect(() => {
    setQuizLoading(true);
    GetQuizData(combined_data.req_quiz)
      .then((res) => {
        const parsedData = parseQuizData(res);
        setQuizData(parsedData);
        setQuizLoading(false);
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
        });
        setCardChange(false);
        setQuizLoading(false);
      });
  }, [combined_data.req_quiz]);

  return (
    <div>
      <QuizCard
        quizData={quizData}
        quizLoading={quizLoading}
        cardChange={cardChange}
        setCardChange={setCardChange}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
