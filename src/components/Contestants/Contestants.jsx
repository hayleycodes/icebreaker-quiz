import React from "react";
import Character from "../Characters/Character/Character";
import styles from "./Contestants.module.scss";
import { people } from "../../settings";
import { allocatedAvatars } from "../../utils";

const Contestants = (props) => {
  let contestantComponents = [];

  if (props.specialQuestion) {
    people.forEach((person, index) => {
      if (person !== "Mimmi" && person !== "Ai") {
        contestantComponents.push(
          <Character
            name={person}
            avatar={allocatedAvatars[person]}
            key={index}
          />
        );
      }
    });
  } else {
    let peopleCopy = [...people];

    for (var i = 0; i < 3; i++) {
      let person = peopleCopy.splice(
        Math.floor(Math.random() * peopleCopy.length),
        1
      );
      contestantComponents.push(
        <Character name={person} avatar={allocatedAvatars[person]} key={i} />
      );
    }
  }

  return <div className={styles.root}>{contestantComponents}</div>;
};

export default Contestants;
