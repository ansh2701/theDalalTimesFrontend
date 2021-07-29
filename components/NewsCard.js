import Link from "next/link";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import styles from "../styles/NCard.module.css";

const color = [
  "red",
  "orange",
  "blue",
  "#ffadad",
  "#ffc6ff",
  "#f72585",
  "#0CECDD",
  "#FFF338",
  "#FF67E7",
  "#C400FF",
  "#28FFBF",
  "#BCFFB9",
];

const NewsCard = ({ post, cls }) => {
  const [col, setCol] = useState(
    color[Math.floor(Math.random() * color.length)]
  );
  const cut = post.title.lastIndexOf("-");
  const newTitle = post.title.slice(0, cut);
  const style = {
    backgroundImage: "url(" + post.urlToImage + ")",
  };
  let currentDate = new Date(post.publishedAt);
  return (
    <Link href={post.url}>
      <a target="_blank" rel="noopener noreferrer">
        <div className={styles[cls]}>
          <div className={styles.card}>
            <div className={styles.source}>
              <FaCircle fill={col} />
              <p>{post.source.name}</p>
            </div>
            {/* <!-- Cover --> */}
            <div className={styles.card__cover}>
              <div className={styles.cardHeader} style={style}></div>
            </div>
            {/* <!-- Content --> */}
            <div className={styles.card__content}>
              <h3>{newTitle}</h3>
              <p className={styles.desc}>{post.description}</p>

              <p className={styles.date}>
                Read More . {currentDate.toDateString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NewsCard;
