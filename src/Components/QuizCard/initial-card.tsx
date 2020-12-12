import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useContext, useState } from "react";
import { fetchType, IInitialCard } from "../../types/quiz-types";
import { QuizDataContext } from "../../data/quiz-data.context";

const InitialCard: React.FC<IInitialCard> = ({ setCardChange }) => {
  const { requiredData } = useContext(QuizDataContext);
  const [quizData, setQuizData] = useState<fetchType>({
    amount: 1,
    category: 0,
    difficulty: "any",
    type: "any",
  });

  const handleSubmit = () => {
    requiredData(quizData);
    setCardChange(true);
  };

  return (
    <div>
      <form>
        <CardContent>
          <Typography
            variant="h4"
            style={{ textAlign: "center", marginBlockEnd: 30 }}
          >
            Quiz Form
          </Typography>
          <div>
            <Typography>Please Enter Number of Questions</Typography>
            <TextField
              error={quizData.amount === 0 || quizData.amount > 50}
              helperText="amount should not be 0 or exceed 50"
              type="number"
              name="amount"
              label="Number of Questions"
              variant="filled"
              style={{ width: "100%" }}
              value={quizData.amount}
              onChange={(e) =>
                setQuizData({
                  amount: Number(e.target.value),
                  category: quizData.category,
                  difficulty: quizData.difficulty,
                  type: quizData.type,
                })
              }
            />
          </div>
          <div style={{ marginTop: 25 }}>
            <Typography>Please Select The Category</Typography>
            <FormControl variant="filled" style={{ width: "100%" }}>
              <InputLabel id="category">Any Category</InputLabel>
              <Select
                labelId="category"
                id="category"
                value={quizData.category}
                onChange={(e) =>
                  setQuizData({
                    amount: quizData.amount,
                    category: Number(e.target.value),
                    difficulty: quizData.difficulty,
                    type: quizData.type,
                  })
                }
              >
                <MenuItem value={0}>Any</MenuItem>
                <MenuItem value={9}>General Knowledge</MenuItem>
                <MenuItem value={10}>Entertainment: Books</MenuItem>
                <MenuItem value={11}>Entertainment: Film</MenuItem>
                <MenuItem value={12}>Entertainment: Music</MenuItem>
                <MenuItem value={13}>
                  Entertainment: Musicals & Theatres
                </MenuItem>
                <MenuItem value={14}>Entertainment: Television</MenuItem>
                <MenuItem value={15}>Entertainment: Video Games</MenuItem>
                <MenuItem value={16}>Entertainment: Board Games</MenuItem>
                <MenuItem value={17}>Science & Nature</MenuItem>
                <MenuItem value={18}>Science: Computers</MenuItem>
                <MenuItem value={19}>Science: Mathematics</MenuItem>
                <MenuItem value={20}>Mythology</MenuItem>
                <MenuItem value={21}>Sports</MenuItem>
                <MenuItem value={22}>Geography</MenuItem>
                <MenuItem value={23}>History</MenuItem>
                <MenuItem value={24}>Politics</MenuItem>
                <MenuItem value={25}>Arts</MenuItem>
                <MenuItem value={26}>Celebrities</MenuItem>
                <MenuItem value={27}>Animals</MenuItem>
                <MenuItem value={28}>Vehicles</MenuItem>
                <MenuItem value={29}>Entertainment: Comics</MenuItem>
                <MenuItem value={30}>Science: Gadgets</MenuItem>
                <MenuItem value={31}>
                  Entertainment: Japanese Anime & Manga
                </MenuItem>
                <MenuItem value={32}>
                  Entertainment: Cartoon & Animations
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ marginTop: 25 }}>
            <Typography>Please Select The Difficulty</Typography>
            <FormControl variant="filled" style={{ width: "100%" }}>
              <InputLabel id="difficulty">Any Difficulty</InputLabel>
              <Select
                labelId="difficulty"
                value={quizData.difficulty}
                onChange={(e) =>
                  setQuizData({
                    amount: quizData.amount,
                    category: quizData.category,
                    difficulty: String(e.target.value),
                    type: quizData.type,
                  })
                }
              >
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="hard">Hard</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ marginTop: 25 }}>
            <Typography>Please Select The Type</Typography>
            <FormControl variant="filled" style={{ width: "100%" }}>
              <InputLabel id="type">Any Type</InputLabel>
              <Select
                labelId="type"
                id="type"
                value={quizData.type}
                onChange={(e) =>
                  setQuizData({
                    amount: quizData.amount,
                    category: quizData.category,
                    difficulty: quizData.difficulty,
                    type: String(e.target.value),
                  })
                }
              >
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="multiple">Multiple Choice</MenuItem>
                <MenuItem value="boolean">True / False</MenuItem>
              </Select>
            </FormControl>
          </div>
        </CardContent>
        <CardActions
          style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
        >
          <Button
            disabled={quizData.amount === 0 || quizData.amount > 50}
            size="medium"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{
              marginTop: 10,
              marginBottom: 15,
            }}
          >
            Proceed ...
          </Button>
        </CardActions>
      </form>
    </div>
  );
};

export default InitialCard;
