import Layout from "../components/Layout";
import NewsCard from "../components/NewsCard";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import styles from "../styles/News.module.css";

const news = ({ posts, homepage }) => {
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

export async function getServerSideProps() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=business&pageSize=20&language=en&apiKey=2c69fdafd7774c9d9fbe95aeaffd4321`
  );
  const posts = await res.json();
  const homepage = await fetchAPI("/newspage");

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts, homepage }, // will be passed to the page component as props
  };
}
