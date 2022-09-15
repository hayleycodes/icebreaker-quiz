import React from "react";
import styles from "./Character.module.scss";

const Character = (props) => {
  return (
    <div className={styles.root}>
      <h3
        className={
          props.smallIcon ? styles.smallIconText : styles.largeIconText
        }
      >
        {props.name}
      </h3>
      <div
        className={
          props.smallIcon ? styles.smallIconWrapper : styles.largeIconWrapper
        }
      >
        <img
          src={require(`../../../static/characters/${props.avatar}.png`)}
          alt="Icon representing a worm."
        />
      </div>
    </div>
  );
};

export default Character;
