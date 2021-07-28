import { useState, useEffect } from "react";
import styles from "../styles/Grid.module.css";
import LargeNews from "./LargeNews";
import NewsCard from "./NewsCard";

const Grid = ({ postArr }) => {
  return (
    <div>
      <div className={styles.gridContainer}>
        <div className={styles.one}>
          <LargeNews post={postArr[0]} />
        </div>
        <div className={styles.two}>
          <NewsCard post={postArr[1]} cls="up" />

          <NewsCard post={postArr[2]} cls="down" />
        </div>
        <div className={styles.three}>
          <NewsCard post={postArr[3]} cls="down" />
          <NewsCard post={postArr[4]} cls="up" />
        </div>
      </div>
    </div>
  );
};

export default Grid;
