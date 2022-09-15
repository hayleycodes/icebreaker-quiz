import React, { useState } from "react";
import styles from "./Question.module.scss";
import Contestants from "../Contestants/Contestants";
import { questions } from "../../settings";

const Question = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [specialQuestion, setSpecialQuestion] = useState(false);

  const handleClick = () => {
    if (questionNumber + 1 === questions.length - 1) {
      setSpecialQuestion(true);
    }
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <div className={styles.root}>
      <h1>{questions[questionNumber]}</h1>
      <Contestants specialQuestion={specialQuestion} />
      {specialQuestion ? (
        ""
      ) : (
        <button className={styles.nextButton} onClick={handleClick}>
          <p>next question</p>
        </button>
      )}
    </div>
  );
};

export default Question;
