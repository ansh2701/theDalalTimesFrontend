import Link from "next/link";
import styles from "../styles/NewsCard.module.css";

const CardCarousel = ({ posts }) => {
  return (
    <div>
      <header className={styles.appHeader}></header>

      <section className={styles.appTitle}>
        <div className={styles.appTitleContent}>
          <h1>Latest News</h1>
          <p>Related To Stocks and Trading</p>
        </div>
      </section>

      <div className={styles.appCardList} id="appCardList">
        {posts.map((post, index) => (
          <Card key={index} index={index} details={post} />
        ))}
      </div>
    </div>
  );
};

const CardHeader = ({ image, category }) => {
  const style = {
    backgroundImage: "url(" + image + ")",
  };
  return (
    <header style={style} className={styles.cardHeader}>
      <h4 className={styles.title}>{category}</h4>
    </header>
  );
};

const CardBody = ({ details }) => {
  let currentDate = new Date(details.publishedAt);
  return (
    <div className={styles.cardBody}>
      <p className={styles.date}>{currentDate.toDateString()}</p>

      <h2>{details.title}</h2>

      <p className={styles.bodyContent}>{details.description}</p>

      <button className={styles.buttonPrimary}>
        {/* <i className={styles.fa fa-chevron-right}></i> Find out more */}
        Find out more
      </button>
    </div>
  );
};

const Card = ({ details }) => {
  return (
    <Link href={details.url}>
      <a>
        <article className={styles.card}>
          <CardHeader category={details.category} image={details.urlToImage} />
          <CardBody details={details} />
        </article>
      </a>
    </Link>
  );
};

export default CardCarousel;
