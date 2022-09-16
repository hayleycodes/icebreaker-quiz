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
        className={`${
          props.smallIcon ? styles.smallIconWrapper : styles.largeIconWrapper
        } ${props.smallIcon ? "" : styles.largeIconAnimate}`}
      >
        <span className={styles.tooltip} data-text={props.avatar}>
          <img
            src={require(`../../../static/characters/${props.avatar}.png`)}
            alt="Icon representing a worm."
          />
        </span>
      </div>
    </div>
  );
};

export default Character;
