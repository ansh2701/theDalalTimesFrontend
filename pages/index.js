import Card from "../components/Card";
import Layout from "../components/Layout";
import { fetchAPI } from "../lib/api";
import Seo from "../components/seo";
import styles from "../styles/Blog.module.css";

const blog = ({ data, homepage }) => {
  const large = [0, 9, 15, 19, 20];
  const small = [1, 2, 3, 6, 7, 8, 10, 11, 12, 16, 17, 18];
  const line = [0];
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

export async function getServerSideProps() {
  // Run API calls in parallel
  const data = await fetchAPI(
    "/articles?_start=0&_limit=20&_sort=updated_at:DESC"
  );

  const homepage = await fetchAPI("/homepage");
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data, homepage },
  };
}
