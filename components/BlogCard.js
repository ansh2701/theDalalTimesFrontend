import styles from "../styles/BlogCard.module.css";
import Image from "next/image";
const BlogCard = ({ article, blogClass }) => {
  return (
    <article className={styles[blogClass]}>
      {/* <img src={getStrapiMedia(article.image)}  /> */}
      <div className={styles.image}>
        <Image
          src={article.image.formats.medium.url}
          height={article.image.formats.medium.height}
          width={article.image.formats.medium.height}
          className={styles.image}
          alt={article.image.name}
        />
      </div>
      <section className={styles.sc}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>{article.title}</h2>
          </div>
          <div className={styles.excerpt}>
            <p className={styles.p1}>{article.description}</p>
          </div>
        </div>
        <div className={styles.perfil}>
          <div className={styles.img2}>
            <Image
              src={article.author.picture.formats.small.url}
              height={article.author.picture.formats.small.height}
              width={article.author.picture.formats.small.width}
              className={styles.img2}
              alt=""
            />
          </div>
          <div className={styles.date}>
            <h3>{article.author.name}</h3>
            <p className={styles.p2}>28 Jun 2020</p>
          </div>
        </div>
        {/* <div className={styles.share}>
        <i className={styles.fas fa-share}></i>
      </div> */}
      </section>
    </article>
  );
};

export default BlogCard;
