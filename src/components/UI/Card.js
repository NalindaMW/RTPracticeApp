import React from "react";

import styles from "./Card.module.css";

const Card = ({ children, cardStyles }) => {
  return <div className={`${styles.card} ${cardStyles}`}>{children}</div>;
};

export default Card;
