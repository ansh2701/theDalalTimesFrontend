import { getStrapiMedia } from "../lib/media";
import styles from "../styles/BlogCard.module.css";
const strapiurl = "localhost:1337";
const BlogCard = ({ article, blogClass }) => {
  console.log(blogClass);
  return (
    <article className={styles[blogClass]}>
      <img src={getStrapiMedia(article.image)} className={styles.image} />
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
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2Wghgwu_2CZe5pdNVTUvhZl38LladTT3Eg&usqp=CAU"
            className={styles.img2}
          />
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
