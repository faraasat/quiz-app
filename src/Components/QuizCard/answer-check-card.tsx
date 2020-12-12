import {
  Button,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { IQuizData } from "../../types/quiz-types";

const AnswerCheckCard: React.FC<IQuizData> = ({ quizData, setCardChange }) => {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState(" ");
  const [value, setValue] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswered, setCorrectAnswered] = useState(0);
  const [currentWindow, setCurrentWindow] = useState(0);
  const [radioDisabled, setRadioDisabled] = useState(false);
  const [btnState, setBtnState] = useState(0);
  const handleNext = () => {
    setValue("");
    setQuestionNumber(questionNumber + 1);
    setBtnState(0);
    setHelperText(" ");
    setRadioDisabled(false);
  };
  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };
  const handleCheck = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    if (btnState === 0) {
      if (typeof quizData != "undefined") {
        if (value === "") {
          setHelperText("Please select an option.");
          setError(true);
        } else if (value === quizData[questionNumber].correct_answer) {
          setCorrectAnswered(correctAnswered + 1);
          setRadioDisabled(true);
          setHelperText("You got it!");
          setError(false);
          if (quizData.length === questionNumber + 1) {
            setCurrentWindow(1);
          } else {
            setBtnState(1);
          }
        } else if (value !== quizData[questionNumber].correct_answer) {
          setHelperText("Sorry, wrong answer!");
          setRadioDisabled(true);
          setError(true);
          if (quizData.length === questionNumber + 1) {
            setCurrentWindow(1);
          } else {
            setBtnState(1);
          }
        }
      }
    }
  };
  const handleCardChange = () => {
    setCardChange(false);
  };

  return (
    <div>
      <form>
        {currentWindow ? (
          <div>
            <CardContent>
              <Typography
                variant="h4"
                style={{ textAlign: "center", marginBlockEnd: 30 }}
              >
                Quiz Result
              </Typography>
              {typeof quizData != "undefined" && (
                <span>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: 19,
                      color: "lightgreen",
                    }}
                  >
                    Total Questions: {quizData.length}
                  </Typography>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: 19,
                      color: "lightblue",
                    }}
                  >
                    Correctly Answered: {correctAnswered}
                  </Typography>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: 19,
                      color: "red",
                    }}
                  >
                    Wrong Answered: {quizData.length - correctAnswered}
                  </Typography>
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBlockStart: 20,
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: 20,
                        color: "orange",
                        marginBlockEnd: 0,
                        marginBottom: 0,
                        paddingBottom: 0,
                      }}
                    >
                      Your Percentage is:
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 28,
                        color: "gold",
                        fontWeight: "bold",
                      }}
                    >
                      {(correctAnswered / quizData.length) * 100}&nbsp;%
                    </Typography>
                  </span>
                </span>
              )}
              <span
                style={{
                  width: "100%",
                  display: "flex",
                  marginTop: 20,
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleCardChange}
                  fullWidth
                >
                  Okay, I got it!
                </Button>
              </span>
            </CardContent>
          </div>
        ) : (
          <CardContent>
            <Typography
              variant="h4"
              style={{ textAlign: "center", marginBlockEnd: 30 }}
            >
              Quiz Questions
            </Typography>
            {typeof quizData != "undefined" && (
              <FormControl component="fieldset" error={error}>
                <FormLabel component="legend">
                  <span
                    style={{
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Question#&nbsp;{questionNumber + 1}:
                  </span>
                  &nbsp;&nbsp;&nbsp;{quizData[questionNumber].question}
                </FormLabel>
                <RadioGroup
                  name="quiz"
                  value={value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleRadioChange(e)
                  }
                  style={{
                    marginBlockStart: 29,
                    marginLeft: 20,
                  }}
                >
                  {quizData[questionNumber].options.length === 4 ? (
                    <>
                      {quizData[questionNumber].options.map(
                        (option: string) => {
                          return (
                            <FormControlLabel
                              value={option}
                              control={<Radio disabled={radioDisabled} />}
                              label={option}
                            />
                          );
                        }
                      )}
                    </>
                  ) : (
                    <span>
                      {quizData[questionNumber].options.map(
                        (option: string) => {
                          return (
                            <FormControlLabel
                              value={option}
                              control={<Radio disabled={radioDisabled} />}
                              label={option}
                            />
                          );
                        }
                      )}
                    </span>
                  )}
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                {btnState ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    style={{
                      marginTop: 20,
                      width: "65%",
                      alignSelf: "flex-end",
                    }}
                  >
                    Next Question
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(e: React.FormEvent<EventTarget>) =>
                      handleCheck(e)
                    }
                    style={{ marginTop: 20 }}
                  >
                    CHECK ANSWER
                  </Button>
                )}
              </FormControl>
            )}
          </CardContent>
        )}
      </form>
    </div>
  );
};

export default AnswerCheckCard;
