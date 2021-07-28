import Card from "../components/Card";
import Layout from "../components/Layout";
import { fetchAPI } from "../lib/api";
import Seo from "../components/seo";
import styles from "../styles/Blog.module.css";

const blog = ({ data, homepage }) => {
  const large = [0, 9];
  const small = [1, 2, 3, 6, 7, 8];
  const checkIndex = (index) => {
    if (large.includes(index)) return "large";
    else if (small.includes(index)) return "small";
    else return "medium";
  };
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <div className={styles.hero}>
        <h1>{homepage.hero.title}</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.postFeed}>
            {data.map((article, index) => (
              <Card
                article={article}
                key={index}
                blogClass={checkIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default blog;

export async function getStaticProps() {
  // Run API calls in parallel
  const [data, homepage] = await Promise.all([
    fetchAPI("/articles?_start=0&_limit=10&_sort=updated_at:DESC"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { data, homepage },
    revalidate: 1,
  };
}
