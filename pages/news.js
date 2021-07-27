import Layout from "../components/Layout";
import NewsCard from "../components/NewsCard";
import styles from "../styles/News.module.css";

const news = ({ posts }) => {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1>News</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.postFeed}>
          {/* <CardCarousel posts={posts.articles} /> */}
          {posts.articles.map((post, index) => (
            <NewsCard post={post} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default news;

export async function getServerSideProps() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=business&pageSize=10&language=en&country=in&apiKey=2c69fdafd7774c9d9fbe95aeaffd4321`
  );
  const posts = await res.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts }, // will be passed to the page component as props
  };
}
