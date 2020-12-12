import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Container } from "@material-ui/core";
import { ChildType } from "../../types/quiz-types";

const useStyles = makeStyles({
  root: {
    minWidth: '35vw',
    borderRadius: 10,
    backgroundColor: 'rgb(244, 255, 254)'
  },
});

const MaterialCard: React.FC<ChildType> = ({ children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={10}>
      <Container>{children}</Container>
    </Card>
  );
};

export default MaterialCard;
