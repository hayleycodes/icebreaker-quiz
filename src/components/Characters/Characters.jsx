import React from "react";
import styles from "./Characters.module.scss";
import Character from "./Character/Character";
import { allocatedAvatars } from "../../utils";

const Characters = () => {
  let characterComponents = [];

  let keyCount = 0;
  for (const [name, avatar] of Object.entries(allocatedAvatars)) {
    characterComponents.push(
      <Character name={name} avatar={avatar} smallIcon={true} key={keyCount} />
    );
    keyCount += 1;
  }

  return <div className={styles.root}>{characterComponents}</div>;
};

export default Characters;
