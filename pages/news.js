import Layout from "../components/Layout";
import NewsCard from "../components/NewsCard";
import styles from "../styles/News.module.css";

const news = ({ posts }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <div className={styles.container}>
        <div className={styles.postFeed}>
          {posts.articles.map((post, index) => (
            <NewsCard post={post} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default news;

export async function getStaticProps() {
  // Run API calls in parallel
  const [posts, homepage] = await Promise.all([
    fetchAPI(
      `https://newsapi.org/v2/top-headlines?category=business&pageSize=10&language=en&country=in&apiKey=2c69fdafd7774c9d9fbe95aeaffd4321`
    ),
    fetchAPI("/newspage"),
  ]);

  return {
    props: { posts, homepage },
    revalidate: 1,
  };
}
