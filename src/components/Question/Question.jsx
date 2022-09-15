import React, { useState } from "react";
import styles from "./Question.module.scss";
import Contestants from "../Contestants/Contestants";
import { questions } from "../../settings";

const Question = () => {
  const [questionNumber, setQuestionNumber] = useState(0);

  return (
    <div className={styles.root}>
      <h1>{questions[questionNumber]}</h1>
      <Contestants />
      <button
        className={styles.nextButton}
        onClick={() => setQuestionNumber(questionNumber + 1)}
      >
        <p>next question</p>
      </button>
    </div>
  );
};

export default Question;
