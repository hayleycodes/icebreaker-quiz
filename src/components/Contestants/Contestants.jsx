import React from "react";
import Character from "../Characters/Character/Character";
import styles from "./Contestants.module.scss";
import { people } from "../../settings";
import { allocatedAvatars } from "../../utils";

const Contestants = (props) => {
  let contestantComponents = [];

  let peopleCopy = [...people];

  for (var i = 0; i < 3; i++) {
    let person = peopleCopy.splice(
      Math.floor(Math.random() * peopleCopy.length),
      1
    );
    contestantComponents.push(
      <Character name={person} avatar={allocatedAvatars[person]} />
    );
  }

  return <div className={styles.root}>{contestantComponents}</div>;
};

export default Contestants;
