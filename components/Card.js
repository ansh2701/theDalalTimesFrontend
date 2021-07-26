import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CssCard.module.css";

const Card = ({ article, blogClass }) => {
  return (
    <>
      {/* <div className={styles.wrapper}> */}
      <div className={styles[blogClass]}>
        <div className={styles.card__cover}>
          {/* <p className={styles.category-tag popular}>Popular</p> */}
          <img
            className={styles.image}
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt=""
          />
        </div>
        <div className={styles.card__content}>
          {/* <p className={styles.blogHashtag}>#webdevelopment #frontend</p> */}
          <h2 className={styles.title}>{article.title}</h2>
          <p className={styles.description}>{article.description}</p>

          <div className={styles.cardProfile}>
            <img
              className={styles.img2}
              src="https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
            <div className={styles.cardProfileInfo}>
              <h3 className={styles.profileName}>Maya Eleanor Peña</h3>
              <p className={styles.profileDate}>25 June 2021</p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Card;
