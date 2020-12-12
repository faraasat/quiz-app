import { Container, Grid } from "@material-ui/core";
import { IQuizCard } from "../../types/quiz-types";
import AnswerCard from "./answer-card";
import InitialCard from "./initial-card";
import MaterialCard from "./material-card.component";

const QuizCard: React.FC<IQuizCard> = ({
  quizData,
  quizLoading,
  cardChange,
  setCardChange,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Container>
        <Grid
          container
          style={{
            display: "flex",
            height: "100vh",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item>
            <MaterialCard>
              {cardChange ? (
                <AnswerCard
                  quizLoading={quizLoading}
                  quizData={quizData}
                  setCardChange={setCardChange}
                />
              ) : (
                <InitialCard setCardChange={setCardChange} />
              )}
            </MaterialCard>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default QuizCard;
