import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import styles from "../styles/LargeCard.module.css";

const LargeNews = ({ post }) => {
  const cut = post.title.lastIndexOf("-");
  const newTitle = post.title.slice(0, cut);
  const color = [
    "red",
    "orange",
    "pink",
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

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const style = {
    backgroundImage: "url(" + post.urlToImage + ")",
  };
  let currentDate = new Date(post.publishedAt);
  return (
    <div onClick={() => openInNewTab(post.url)}>
      <div className={styles.card}>
        {/* <!-- Cover --> */}
        <div className={styles.source}>
          <FaCircle fill={color[Math.floor(Math.random() * color.length)]} />
          <p>{post.source.name}</p>
        </div>
        <h3 className={styles.title1}>{newTitle}</h3>
        <div className={styles.card__cover}>
          <div className={styles.cardHeader} style={style}></div>
        </div>
        {/* <!-- Content --> */}
        <div className={styles.card__content}>
          <h3 className={styles.title2}>{newTitle}</h3>
          <p>{post.description}</p>
          <p className={styles.date}>
            {" "}
            Read More . {currentDate.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LargeNews;
