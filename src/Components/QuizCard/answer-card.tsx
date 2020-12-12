import { IAnswerCard } from "../../types/quiz-types";
import { CircularProgress, Typography } from "@material-ui/core";
import AnswerCheckCard from "./answer-check-card";

const AnswerCard: React.FC<IAnswerCard> = ({ quizLoading, quizData, setCardChange }) => {
  return (
    <div>
      {quizLoading ? (
        <span
          style={{
            width: "100%",
            minHeight: "75vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color="primary"
            style={{
              marginBlockEnd: 30,
            }}
          >
            Please be Patient....
          </Typography>
          <CircularProgress color="primary" size={100} thickness={5} />
        </span>
      ) : (
        <AnswerCheckCard quizData={quizData} setCardChange={setCardChange} />
      )}
    </div>
  );
};

export default AnswerCard;
