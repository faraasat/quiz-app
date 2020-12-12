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
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CheckIcon from "@material-ui/icons/Check";
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
                style={{
                  textAlign: "center",
                  marginBlockStart: 15,
                  marginBlockEnd: 45,
                  fontSize: "4vw",
                  fontFamily: "Pacifico, cursive",
                  fontWeight: "bolder",
                  color: "violet",
                }}
              >
                Quiz Result
              </Typography>
              {typeof quizData != "undefined" && (
                <span style={{}}>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: 19,
                      color: "lightgreen",
                      fontFamily: "Bungee Inline, cursive",
                    }}
                  >
                    Total Questions: {quizData.length}
                  </Typography>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: 19,
                      color: "lightblue",
                      fontFamily: "Bungee Inline, cursive",
                      letterSpacing: 2,
                    }}
                  >
                    Correctly Answered: {correctAnswered}
                  </Typography>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: 19,
                      color: "red",
                      fontFamily: "Bungee Inline, cursive",
                      letterSpacing: 2,
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
                        fontFamily: "Bungee Inline, cursive",
                        letterSpacing: 2,
                      }}
                    >
                      Your Percentage is:
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 28,
                        color: "gold",
                        fontWeight: "bold",
                        fontFamily: "Bungee Inline, cursive",
                        letterSpacing: 2,
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
                  marginTop: 25,
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleCardChange}
                  style={{
                    fontFamily: "Knewave, cursive",
                    fontSize: 20,
                    letterSpacing: 2,
                  }}
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
              style={{
                textAlign: "center",
                marginBlockStart: 15,
                marginBlockEnd: 30,
                fontSize: "4vw",
                fontFamily: "Pacifico, cursive",
                fontWeight: "bolder",
                color: "lightblue",
              }}
            >
              Quiz Questions
            </Typography>
            {typeof quizData != "undefined" && (
              <FormControl component="fieldset" error={error}>
                <FormLabel
                  component="legend"
                  style={{
                    fontFamily: "Londrina Solid, cursive",
                    fontSize: 25,
                    lineHeight: 1.3,
                    letterSpacing: 1.7,
                  }}
                >
                  <span
                    style={{
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Question#&nbsp;{questionNumber + 1}:
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <p
                    dangerouslySetInnerHTML={{
                      __html: quizData[questionNumber].question,
                    }}
                  ></p>
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
                        (option: string, index: number) => {
                          return (
                            <FormControlLabel
                              key={index}
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
                        (option: string, index: number) => {
                          return (
                            <FormControlLabel
                              key={index}
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
                      marginBottom: 15,
                      fontFamily: "Knewave, cursive",
                      fontSize: 20,
                      letterSpacing: 2,
                      paddingLeft: 30,
                      paddingRight: 30,
                      marginRight: 10,
                    }}
                  >
                    Next Question
                    <ArrowForwardIcon
                      style={{
                        fontFamily: "Knewave, cursive",
                        fontSize: 30,
                        fontWeight: "bolder",
                      }}
                    />
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={(e: React.FormEvent<EventTarget>) =>
                      handleCheck(e)
                    }
                    style={{
                      marginTop: 10,
                      marginBottom: 15,
                      fontFamily: "Knewave, cursive",
                      fontSize: 25,
                      letterSpacing: 2,
                      paddingLeft: 30,
                      paddingRight: 30,
                      marginRight: 10,
                      color: "green",
                    }}
                  >
                    CHECK ANSWER&nbsp;
                    <CheckIcon
                      style={{
                        fontFamily: "Knewave, cursive",
                        fontSize: 50,
                        fontWeight: "bolder",
                      }}
                    />
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
