import Image from "next/image";
import styles from "../styles/NCard.module.css";

const NewsCard = ({ post, cls }) => {
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
      <div className={styles[cls]}>
        <div className={styles.card}>
          {/* <!-- Cover --> */}
          <div className={styles.card__cover}>
            <div className={styles.cardHeader} style={style}></div>
          </div>
          {/* <!-- Content --> */}
          <div className={styles.card__content}>
            <p className={styles.date}>{currentDate.toDateString()}</p>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
