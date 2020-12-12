const initialValue = {
  req_quiz: {
    amount: 1,
    category: 0,
    difficulty: "any",
    type: "any",
  },
};

export default function QuizDataReducer(
  state: any = initialValue,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "REQUIRED_QUIZ":
      return { ...state, req_quiz: action.payload };
    default:
      return state;
  }
}
